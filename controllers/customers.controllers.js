const { ObjectId } = require('mongodb');

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { customeraccounts, adminaccounts, customercarts, orders, productsDB, petsDB } = require("../database/db.js");
const { purchasePet } = require("./pets.controllers");
const { purchaseProduct } = require("./products.controllers");
//const nodemailer = require("nodemailer");
//const imagesize = require("image-size");
//const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

function Response(success, msg, data) {
  let response = { success: success, msg: msg, data: data };
  return response;
}

const customerRegister = async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
  } = req.body;
  date = Date.now();
  if (
    !name || !email || !phone || !password
  ) { return res.status(400).send(Response(false, "Missing Information", {})); }
  try {
    const customerExists = await customeraccounts.findOne({ Email: email });
    if (customerExists) {
      return res.status(406).send(Response(false, "Customer already exists!", {}));
    }
    //const hashedPassword = await bcrypt.hash(password, 12);

    const customer = await customeraccounts.insertOne({
      Email: email,
      Name: name,
      Phone: phone,
      Password: password,
      CreatedAt: date
    });
    //sendOTPVerificationEmail(user._id, email);
    if (customer) {
      res.status(201).send(Response(true, "ok", {}));
    } else {
      res.status(500).send(Response(false, "Customer registration failed", {}));
    }
  } catch (err) {
    console.log(err);
  }
};

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

const loginRoute = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await customeraccounts.findOne({ Email: email, Password: password });
    if (!customer) {
      const admin = await adminaccounts.findOne({ Email: email, Password: password });
      if (!admin)
        return res.status(400).send(Response(false, "Invalid Credentials", {}));
      else {
        const token = jwt.sign({ Id: admin._id, Email: email }, process.env.JWT_SECRET);
        if (res.status(201)) {
          return res.status(201).send(Response(true, "ok", { token: token, type: admin.Type }));
        }
      }
    }
    const token = jwt.sign({ Id: customer._id, Email: email }, process.env.JWT_SECRET);
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", { token: token, type: "customer" }));

    }
    else return res.status(500).send(Response(false, "Error", error));
  }
  catch (error) {
    res.send({ status: "error" });
  }
};

const updateCustomer = async (req, res) => {
  const { uname, email, phone, dob, address_line1, address_area, city, pincode } = req.body;
  try {
    const update = {
      $set: {
        Name: uname,
        Phone: phone,
        DOB: dob,
        Address_line1: address_line1,
        Address_area: address_area,
        City: city,
        Pincode: pincode
      }
    };
    await customeraccounts.updateOne({ Email: email }, update, {});
    if (res.status(201)) {
      res.status(201).send(Response(true, "ok", {}));
    }
    else res.status(500).send(Response(false, "Error", {}));
  }
  catch (error) {
    res.send({ status: "error" });
    //console.log(error);
  }
};

const changePassword = async (req, res) => {
  const { oldpass, newpass } = req.body;
  try {
    const customerId = new ObjectId(req.params.customerId);
    const customer = await adminaccounts.findOne({ _id: customerId , Password: oldpass})
    if (!customer) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }
    const update = {
      $set: {
        Password: newpass
      }
    };
    await customeraccounts.updateOne({ _id: customerId }, update, {});
    return res.status(201).send(Response(true, "ok", {}));
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getRoute = async (req, res) => {
  const userId = new ObjectId(req.user.Id);
  //console.log("get userId", req.user.Id);
  try {
    await customeraccounts.findOne({ _id: userId })
      .then((customerdata) => {
        //console.log(customerdata);
        res.status(201).send(Response(true, "ok", customerdata));
      })
      .catch((error) => {
        res.status(500).send(Response(false, "Error", error));
      })
  } catch (error) { console.log(error); }
};

const getCustomerProfile = async (req, res) => {
  try {
    const customerId = new ObjectId(req.params.customerId);
    const customer = await customeraccounts.findOne({ _id: customerId })
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    return res.json({ customer });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const addToCart = async (req, res) => {
  const { qty, cost, name } = req.body;
  const customerId = new ObjectId(req.user.Id);
  const p = req.params.p;
  const pId = req.params.pId;
  const cat = req.params.cat;
  const amt = qty * cost;
  try {
    const query = { CustomerId: customerId };
    const update = {
      $push: {
        Items: {
          Type: p,
          Category: cat,
          pId: pId,
          Name: name,
          Qty: qty,
          Cost: cost,
          Amt: amt,
        },
      },
    };
    const options = { upsert: true };
    await customercarts.updateOne(query, update, options);
    return res.status(201).send(Response(true, "ok", {}));
  } catch (error) {
    res.status(500).send(Response(false, "error", error));
    console.log(error);
  }
};

const removefromCart = async (req, res) => {
  const customerId = new ObjectId(req.user.Id);
  const p = req.params.p;
  const pId = req.params.pId;
  const cat = req.params.cat;

  try {
    const query = { CustomerId: customerId };
    const update = {
      $pull: {
        Items: { Type: p, Category: cat, pId: pId }
      }
    };
    await customercarts.updateOne(query, update, {});

    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {}));
    } else {
      return res.status(500).send(Response(false, "error", {}));
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
};


const viewCart = async (req, res) => {
  const customerId = new ObjectId(req.user.Id);
  //console.log(customerId);
  try {
    const cart = await customercarts.findOne({ CustomerId: customerId });
    if (res.status(201)) {
      //console.log(cart);
      return res.status(201).send(Response(true, "ok", cart));
    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
    console.log(error);
  }
};


const purchaseCart = async (req, res) => {
  const customerId = new ObjectId(req.user.Id);
  const { totalAmount, totalItems, paymentMethod } = req.body
  try {
    const cart = await customercarts.findOne({ CustomerId: customerId });
    if (!cart) {
      return res.status(404).send(Response(false, "Cart not found", {}));
    }
    const orderItems = new Array();
    var i = 0;
    for (const cartItem of cart.Items) {
      const { Type, Category, pId, Qty } = cartItem;
      var pres;
      if (Type == "pet") {
        pres = await purchasePet(pId, Category, Qty);
        if (pres.status != 200) return res.status(400).send(Response(false, "Not enough stock", {}));
      }
      else if (Type == "product") {
        pres = await purchaseProduct(pId, Category, Qty);
        if (pres.status != 200) return res.status(400).send(Response(false, "Not enough stock", {}));
      }
      orderItems[i] = cartItem;
      i++;
    }
    const date = Date.now();
    await customercarts.updateOne({ CustomerId: customerId }, { $set: { Items: [] } });
    const order = await orders.insertOne({
      CustomerId: customerId,
      NumItems: totalItems,
      OrderItems: orderItems,
      CreatedAt: date,
      Amount: totalAmount,
      PaymentMethod: paymentMethod,
      Status: "Order Placed"
    });
    return res.status(201).send(Response(true, "Purchase successful", order));
  } catch (error) {
  console.log(error);
  res.status(500).send(Response(false, "error", error));
}
};

const getOrders = async (req, res) => {
  const customerId = new ObjectId(req.user.Id);
  try {
    const ordersarr = await orders.find({CustomerId: customerId}).toArray();
    //console.log(ordersarr);
    res.status(201).send(Response(true, "ok", ordersarr));
  }
  catch (error) {
    //console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
}

const viewOrder = async (req, res) => {
  const orderId = new ObjectId(req.params.oId);
  try {
    const order = await orders.findOne({_id: orderId});
    //console.log(order);
    res.status(201).send(Response(true, "ok", order));
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
}



const searchAllCollections = async (db, searchTerm) => {
  try {
    const collections = await db.listCollections().toArray();
    const results = {};

    for (const collection of collections) {
      const collectionName = collection.name;
      const regex = new RegExp(searchTerm, 'i'); // 'i' for case-insensitive
      if (collectionName.match(regex)) {
        const collectionResults = await db.collection(collectionName).find({}).toArray();
        results[collectionName] = collectionResults;
      } else {
        const collectionResults = await db.collection(collectionName)
          .find({
            $or: [
              { Name: { $regex: searchTerm, $options: 'i' } },
              { Tags: { $regex: searchTerm, $options: 'i' } },
            ],
          })
          .toArray();
        if(collectionResults.length>0) results[collectionName] = collectionResults;
      }
    }
    return results;
  } catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
};



const searchAll = async (req, res) => {
  const searchTerm = req.params.search; 
  try {
    const petsResults = await searchAllCollections(petsDB, searchTerm);
    //console.log(petsResults);
    const productsResults = await searchAllCollections(productsDB, searchTerm);
    //console.log(productsResults);
    const combinedResults = {
      pets: petsResults,
      products: productsResults,
    };

    res.status(201).send(Response(true, "ok", combinedResults));
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while searching for items.' });
  }
};

// const fetchCustomer = async (req, res) => {
//     const { token } = req.body;
//     //console.log(token);
//     try {
//       const customer = jwt.verify(token, process.env.JWT_SECRET);
//       const id = customer._id;
//       await customeraccounts.findOne({ _id: id })
//         .then((customerdata) => {
//             //console.log(customerdata);
//             res.status(201).send(Response(true, "ok", customerdata));
//         })
//         .catch((error) => {
//             res.status(500).send(Response(false, "Error", error));
//         })
//     } catch (error) { console.log(error); }
// } 



module.exports = {
  customerRegister,
  loginRoute,
  getRoute,
  updateCustomer,
  getCustomerProfile,
  changePassword,
  

  addToCart,
  viewCart,
  removefromCart,
  purchaseCart,
  getOrders,
  viewOrder,

  searchAll
};






/*
const forgotPassword = async (req, res) => {
  try {
    const userEmail = req.body.email;
    // console.log(userEmail);
    if (!userEmail) {
      return res
        .status(401)
        .send(Response(false, "Please enter your email first!", {}));
    }
    const user = await User.findOne({ email: userEmail });
    // console.log(user);
    if (!user) {
      return res.status(401).send(Response(false, "User not found!", {}));
    }
    const secret = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ email: userEmail }, secret, {
      expiresIn: "1h",
    });
    // console.log(token);
    const resetLink = `http://localhost:5000/user/resetPassword/${user._id}/${token}`;
    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Password reset link",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
    };
    transporter.sendMail(mailOptions);
    return res.status(200).send(Response(true, "Password reset link", {}));
  } catch (err) {
    console.log(err);
    res.status(500).send(Response(false, "Error occurred", err));
  }
};


const resetPassword = async (req, res) => {
  try {
    const password = req.body.password;
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send(Response(false, "User not found", {}));
    }
    // console.log(user.password);
    const token = req.params.token;
    // console.log(token);
    const secret = process.env.JWT_SECRET + user.password;
    const decoded = jwt.verify(token, secret);
    // console.log("*****", decoded);
    if (!decoded) {
      return res.status(400).send(Response(false, "Invalid Token", {}));
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send(Response(true, "Password reset successful", {}));
  } catch (err) {
    console.log(err);
    res.status(500).send(Response(false, "Error :(", err));
  }
};


const getRoute = async (req, res) => {
  const userId = req.user.userId;
  // console.log("get userId", userId);
  const user = await User.findOne({ _id: userId });
  if (!userId) {
    return res
      .status(401)
      .send(Response(false, "User not Authenticated!!", {}));
  }
  if (!user) {
    return res.status(401).send(Response(false, "User not found!", {}));
  }
  await User.findOne({ _id: userId })
    .select("-password")
    .populate("eventsAttended.event_Id")
    .then((result) => {
      return res.status(200).send(Response(true, "Success", result));
    })
    .catch((err) => {
      return res
        .status(500)
        .send(Response(false, "Some error occurred!!", err));
    });
};

const resendOtp = async (req, res) => {
  const email = req.body.email;
  try {
    if (!email) {
      return res.status(400).send(Response(false, "Enter your email!", {}));
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send(Response(false, "User not found!", {}));
    }
    if (user.verified == true) {
      return res.status(400).send(Response(false, "Already Verified", {}));
    }
    const optCheck = await OtpverificationUser.findOne({ email: email });
    if (optCheck) {
      await OtpverificationUser.deleteMany({ email: email });
    }
    const otp = otpgenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    console.log(otp);
    // mail options
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      html: `<h1> Please verify your OTP </h1><p>OTP : ${otp}</p>`,
    };

    // hash the otp
    const hashedOTP = await bcrypt.hash(otp, 10);
    await OtpverificationUser.create({
      userId: user._id,
      email: email,
      otp: hashedOTP,
    });
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        return res
          .status(400)
          .send(Response(false, "Cannot send email!", error));
      } else {
        return res.status(200).send(Response(true, "Email has been sent!", {}));
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(Response(false, "Some error occured", {}));
  }
};

const sendOTPVerificationEmail = async (_id, email, res) => {
  try {
    // const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const otp = otpgenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    console.log(otp);

    // mail options
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      html: `<h1> Please verify your OTP </h1><p>OTP : ${otp}</p>`,
    };

    // hash the otp
    const hashedOTP = await bcrypt.hash(otp, 10);
    await OtpverificationUser.create({
      userId: _id,
      email: email,
      otp: hashedOTP,
    });
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        return res
          .status(400)
          .send(Response(false, "Cannot send email!", error));
      } else {
        return res.status(200).send(Response(true, "Email has been sent!", {}));
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(Response(false, "Some error occured", {}));
  }
};

const sendLoginOtpEmail = async (_id, email, res) => {
  try {
    // const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const otp = otpgenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    console.log(otp);

    // mail options
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Login OTP",
      html: `<h1>Enter OTP to login</h1><p>OTP : ${otp}</p>`,
    };

    // hash the otp
    const hashedOTP = await bcrypt.hash(otp, 10);
    await LoginwithOtp.create({
      userId: _id,
      email: email,
      otp: hashedOTP,
    });
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        return res
          .status(400)
          .send(Response(false, "Cannot send email!", error));
      } else {
        return res.status(200).send(Response(true, "Email has been sent!", {}));
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(Response(false, "Some error occured", {}));
  }
};

const verifyLoginOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (!otp || !email) {
      return res.status(400).send(Response(false, "Missing Fields!", {}));
    } else {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).send(Response(false, "User not found", {}));
      }
      const otpHolder = await LoginwithOtp.findOne({
        email: email,
      });
      console.log(email);
      if (!otpHolder) {
        return res
          .status(200)
          .send(
            Response(
              false,
              "OTP not found or has been verified already! Please login!",
              {}
            )
          );
      }
      const hashedOTP = otpHolder.otp;
      // console.log(hashedOTP);
      const validOTP = await bcrypt.compare(otp, hashedOTP);
      if (!validOTP) {
        return res.status(400).send(Response(false, "Invalid OTP!", {}));
      } else {
        // generate token
        const authToken = generateToken({
          userId: user._id,
        });
        await LoginwithOtp.deleteMany({ email: email });
        return res
          .status(200)
          .send(Response(true, "Token generated!", { authToken: authToken }));
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(Response(false, "Error!", {}));
  }
};

const verifyOTP = async function (req, res) {
  try {
    const { otp, email } = req.body;
    if (!otp || !email) {
      return res.status(400).send(Response(false, "Missing Fields!", {}));
    } else {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).send(Response(false, "User not found", {}));
      }
      if (user.verified == true) {
        return res.status(400).send(Response(false, "Already Verified", {}));
      }
      const otpHolder = await OtpverificationUser.findOne({
        email: email,
      });
      console.log(email);
      if (!otpHolder) {
        return res
          .status(200)
          .send(
            Response(
              false,
              "OTP not found or has been verified already! Please login!",
              {}
            )
          );
      }
      const hashedOTP = otpHolder.otp;
      // console.log(hashedOTP);
      const validOTP = await bcrypt.compare(otp, hashedOTP);
      if (!validOTP) {
        return res.status(400).send(Response(false, "Invalid OTP!", {}));
      } else {
        await User.updateOne({ email: email }, { verified: true });
        await OtpverificationUser.deleteMany({ email: email });
        return res
          .status(200)
          .send(Response(true, "Verification done successfully", { email }));
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(Response(false, "Error!", {}));
  }
};

const loginRoutePassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send(Response(false, "Missing Fields!", {}));
  }
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send(Response(false, "Invalid Credentials", {}));
    }
    if (user.verified == false) {
      return res
        .status(400)
        .send(Response(false, "Please verify your account", {}));
    }
    if (await bcrypt.compare(password, user.password)) {
      // console.log(user);
      const authToken = generateToken({
        userId: user._id,
      });
      return res
        .status(200)
        .send(Response(true, "Login Successfull!", { authToken: authToken }));
    } else {
      return res.status(401).send(Response(false, "Incorrect credentials", {}));
    }
  } catch (err) {
    return res
      .status(500)
      .send(Response(false, "Error logging in the user.", {}));
  }
};
*/
