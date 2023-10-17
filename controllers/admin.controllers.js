const mongoose = require("mongoose");

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminaccounts, petsDB, customeraccounts, orders } = require("../database/db.js");
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

// Master Admin

const adminRegister = async (req, res) => {
  const {uname, email, type, token } = req.body;
  const defaultPassword = "admin123";
  const date = Date.now();
  try {
    try {
      const admin = jwt.verify(token, process.env.JWT_SECRET);
      const id = admin._id;
      await adminaccounts.findOne({ _id: id })
        .then((admindata) => {
            if(admindata.Type!="MasterAdmin")
            return res.status(500).send(Response(false, "Action Not Allowed", {}));
        })
    } catch (error) { console.log(error); }
    const adminExisting = await adminaccounts.findOne({ _id: email });
    if (adminExisting) {
      return res.status(406).send(Response(false, "Admin already exists!", {}));
    }
    const admin = await adminaccounts.insertOne({
      _id: email,
      Name: uname,
      Password: defaultPassword,
      Type: type,
      CreatedAt: date
    });
    if(admin)
    res.status(201).send(Response(true, "ok", {}));
    else
    res.status(500).send(Response(false, "Admin registration failed", {}));
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "Error", error));
  }
};

const fetchAdmin = async (req, res) => {
  const { token } = req.body;
  //console.log(token);
  try {
    const admin = jwt.verify(token, process.env.JWT_SECRET);
    const id = admin._id;
    await adminaccounts.findOne({ _id: id })
      .then((admindata) => {
          //console.log(customerdata);
          res.status(201).send(Response(true, "ok", admindata));
      })
      .catch((error) => {
          res.status(500).send(Response(false, "Error", error));
      })
  } catch (error) { console.log(error); }
};

const updateAdmin = async (req, res) => {
  const { uname, email, phone, dob } = req.body;
    try {

      const update = { $set: { 
        Name: uname,
        Phone: phone,
        DOB: dob
      }};
      await adminaccounts.updateOne({_id: email }, update, {});
      
      if (res.status(201)) {
        res.status(201).send(Response(true, "ok", {}));
      }
      else return res.status(500).send(Response(false, "Error", error));
    }
    catch (error) {
      res.status(500).send(Response(false, "Error", error));
      console.log(error);
    }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminaccounts.find();
     //console.log(admins);
    const adminsarr = new Array();
    var i=0;
    for await (const admin of admins)
    {
      adminsarr[i] = admin;
      i++;
    }
    if (res.status(201)) {
      res.status(201).send(Response(true, "ok", adminsarr));
    }
    else res.status(500).send(Response(false, "Error", {}));
  }
  catch (error) {
    res.status(500).send(Response(false, "Error", error));
  }
} ;

const viewAdmin = async (req, res) => {
  const {email, token } = req.body;
  try {
    try {
      const admin = jwt.verify(token, process.env.JWT_SECRET);
      const id = admin._id;
      await adminaccounts.findOne({ _id: id })
        .then((admindata) => {
            if(admindata.type!="MasterAdmin")
            return res.status(500).send(Response(false, "Action Not Allowed", {}));
        })
    } catch (error) { console.log(error); }
    const admininfo = await adminaccounts.findOne({ _id: email })
      .then(() => {
        res.status(201).send(Response(true, "ok", admininfo));
      })
      .catch((error) => {
        res.status(500).send(Response(false, "error", {}));
      })
  } catch (error) { res.status(500).send(Response(false, "error", error)); } 
} ;

const removeAdmin = async (req, res) => {
  const { email, token } = req.body;
  try {
    try {
      const admin = jwt.verify(token, process.env.JWT_SECRET);
      const id = admin._id;
      await adminaccounts.findOne({ _id: id })
        .then((admindata) => {
            if(admindata.type!="MasterAdmin")
            return res.status(403).send(Response(false, "Action Not Allowed", {}));
        })
    } catch (error) { console.log(error); }
    if(email=="masteradmin@petbazzar.com")
    return res.status(403).send(Response(false, "Action Not Allowed", {}));
    await adminaccounts.deleteOne({ _id: email })
      .then(() => {
        res.status(201).send(Response(true, "ok", {}));
      })
      .catch((error) => {
        res.status(500).send(Response(false, "error", error));
      })
  } catch (error) { res.status(500).send(Response(false, "error", error)); } 
} ;

const updatePriviledges = async (req, res) => {
  const {email, token, type } = req.body;
  try {
    try {
      const admin = jwt.verify(token, process.env.JWT_SECRET);
      const id = admin._id;
      await adminaccounts.findOne({ _id: id })
        .then((admindata) => {
            if(admindata.type!="MasterAdmin")
            return res.status(500).send(Response(false, "Action Not Allowed", {}));
        })
    } catch (error) { console.log(error); }
    await adminaccounts.updateOne({_id: email }, { $set: { Type: type }}, {});
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "ok", {}));
  } catch (error) { res.status(500).send(Response(false, "error", error)); } 
} ;

// Product Management
const addPet = async (req, res) =>{
  const { name, year, gender, breed, colour, vaccinationStatus, allergies, cost, category } = req.body;
  const petscollection = petsDB.collection(category);
  try {
    await petscollection.insertOne({
      Name: name,
      Year: year,
      Gender: gender,
      Breed: breed,
      Colour: colour,
      VaccinationStatus: vaccinationStatus,
      Allergies: allergies,
      Cost: cost,
      Status: "Available"
    });
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
    console.log(error);
  }
};

const updatePet = async (req, res) =>{
  const { id, name, year, gender, breed, colour, vaccinationStatus, allergies, status, cost, category } = req.body;
  const petscollection = petsDB.collection(category);
  try {
    await petscollection.updateOne({_id: id }, { $set: { 
      Name: name,
      Year: year,
      Gender: gender,
      Breed: breed,
      Colour: colour,
      VaccinationStatus: vaccinationStatus,
      Allergies: allergies,
      Status: status,
      Cost: cost
    }}, {});
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    console.log(error);
    return res.status(500).send(Response(false, "error", error));
  }
};

const deletePet = async (req, res) => {
  const { id, category} = req.body;
  const petscollection = petsDB.collection(category);
  try {
    await petscollection.deleteOne({_id: id })
    .then(() => {
      if (res.status(201)) {
        return res.status(201).send(Response(true, "ok", {}));
      }
      else return res.status(500).send(Response(false, "error", {}));
    })
    .catch((error) => {
      res.status(500).send(Response(false, "error", {}));
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
};

const viewPet = async (req, res) => {
  const { id, category} = req.body;
  const petscollection = petsDB.collection(category);
  try {
    const pet = await petscollection.findOne({_id: id })
    if (pet) {
        return res.status(201).send(Response(true, "ok", pet));
    }
    else return res.status(500).send(Response(false, "Pet Not Found", {}));
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
}

const viewCategories = async (req, res) => {
    try {
    const categories = await petsDB.listCollections().toArray();

    res.status(201).send(Response(true, "ok", categories));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const getAllPets = async (req, res) => {
  const { category } = req.body;
  const petscollection = petsDB.collection(category);
  try {
    const petsdata = await petscollection.find().toArray();
    res.status(201).send(Response(true, "ok", petsdata));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}


// Customer Managament
const getAllCustomers = async (req, res) => {
  try {
    const customers = await customeraccounts.find().toArray();
 
    res.status(201).send(Response(true, "ok", customers));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

// Customer Support
const getAllOrders = async (req, res) => {
  try {
    const ordersinfo = await orders.find().toArray();
 
    res.status(201).send(Response(true, "ok", ordersinfo));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

// Analytics

module.exports = {
  adminRegister,
  fetchAdmin,
  updateAdmin,
  getAllAdmins,
  viewAdmin,
  removeAdmin,
  updatePriviledges,

  addPet,
  viewPet,
  deletePet,
  updatePet,
  getAllPets,
  viewCategories,

  getAllCustomers,
  getAllOrders
};

