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
  const userId = new ObjectId(req.user.Id);
 
  try {
    
    const customer = await customeraccounts.findOne({ _id: userId , Password: oldpass})
    if (!customer) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }
    const update = {
      $set: {
        Password: newpass
      }
    };
    await customeraccounts.updateOne({ _id: userId }, update, {});
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

