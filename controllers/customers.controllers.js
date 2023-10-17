const mongoose = require("mongoose");

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { customeraccounts, adminaccounts } = require("../database/db.js");
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
    const customerExists = await customeraccounts.findOne({ _id: email });
    if (customerExists) {
      return res.status(406).send(Response(false, "Customer already exists!", {}));
    }
    //const hashedPassword = await bcrypt.hash(password, 12);

    const customer = await customeraccounts.insertOne({
        _id: email,
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
    const customer = await customeraccounts.findOne({ _id: email, Password: password  });
    if (!customer) {
      const admin = await adminaccounts.findOne({ _id: email, Password: password });
      if(!admin)
      return res.status(400).send(Response(false, "Invalid Credentials", {}));
      else{
        const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
        if (res.status(201)) {
          return res.status(201).send(Response(true, "ok", {token: token, type: admin.Type}));
        }
      }
    }
    const token = jwt.sign({ _id: customer._id }, process.env.JWT_SECRET);
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {token: token, type: "customer"}));

    }
    else return res.status(500).send(Response(false, "Error", error));
  }
  catch (error) {
    res.send({ status: "error" });
  }
};

const updateCustomer = async (req, res) => {
    const {uname, email, phone, dob, address_line1, address_area, city, pincode, date} = req.body;
    try {
      const update = { $set: { 
        Name: uname,
        Phone: phone,
        DOB: dob, 
        Address_line1: address_line1, 
        Address_area: address_area, 
        City: city, 
        Pincode: pincode 
      }};
      await customeraccounts.updateOne({_id: email }, update, {});
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

const fetchCustomer = async (req, res) => {
    const { token } = req.body;
    //console.log(token);
    try {
      const customer = jwt.verify(token, process.env.JWT_SECRET);
      const id = customer._id;
      await customeraccounts.findOne({ _id: id })
        .then((customerdata) => {
            //console.log(customerdata);
            res.status(201).send(Response(true, "ok", customerdata));
        })
        .catch((error) => {
            res.status(500).send(Response(false, "Error", error));
        })
    } catch (error) { console.log(error); }
} 



module.exports = {
  customerRegister,
  loginRoute,
  fetchCustomer,
  updateCustomer
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
