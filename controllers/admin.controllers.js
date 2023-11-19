const { ObjectId } = require('mongodb');

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const upload = multer({ dest: 'uploads' });
const { adminaccounts, petsDB, productsDB, customeraccounts, orders, supportTickets } = require("../database/db.js");
const { put } = require('../routes/customers.routes.js');
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
  const { uname, email, type } = req.body;
  const defaultPassword = "admin123";
  const date = Date.now();
  const userId = new ObjectId(req.user.Id);
  try {
    try {
      const admin1 = await adminaccounts.findOne({ _id: userId })
      //console.log(admin1);
      if (!admin1 || admin1.Type != "MasterAdmin") {
        //console.log(admin1.data);
        return res.status(500).send(Response(false, "Action Not Allowed", {}));
      }

    } catch (error) { console.log(error); }
    const adminExisting = await adminaccounts.findOne({ Email: email });
    if (adminExisting) {
      return res.status(406).send(Response(false, "Admin already exists!", {}));
    }
    const admin = await adminaccounts.insertOne({
      Email: email,
      Name: uname,
      Password: defaultPassword,
      Type: type,
      CreatedAt: date
    });
    if (admin)
      res.status(201).send(Response(true, "ok", {}));
    else
      res.status(500).send(Response(false, "Admin registration failed", {}));
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "Error", error));
  }
};

const getRoute = async (req, res) => {
  const userId = new ObjectId(req.user.Id);
  //console.log("get userId", req.user.Email);
  try {
    await adminaccounts.findOne({ _id: userId })
      .then((admindata) => {
        //console.log(customerdata);
        res.status(201).send(Response(true, "ok", admindata));
      })
      .catch((error) => {
        res.status(500).send(Response(false, "Error", error));
      })
  } catch (error) { console.log(error); }
};

const getEmail = async (req, res) => {
  //console.log(req.user.Email);
  res.status(201).send(Response(true, "ok", req.user.Email));
};

const getAdminProfile = async (req, res) => {
  try {
    const adminId = new ObjectId(req.params.adminId);
    const admin = await adminaccounts.findOne({ _id: adminId })
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    return res.json({ admin });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  const { uname, email, phone, dob } = req.body;

  try {

    const update = {
      $set: {
        Name: uname,
        Phone: phone,
        DOB: dob
      }
    };
    await adminaccounts.updateOne({ Email: email }, update, {});

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

const changePassword = async (req, res) => {
  const { oldpass, newpass } = req.body;
  const userId = new ObjectId(req.user.Id);
 
  try {
   
    const admin = await adminaccounts.findOne({ _id: userId, Password: oldpass })
    if (!admin) {
      
      return res.status(404).json({ message: 'Invalid Credentials' });
    }
    const update = {
      $set: {
        Password: newpass
      }
    };
    await adminaccounts.updateOne({ _id: userId }, update, {});
    return res.status(201).send(Response(true, "ok", {}));
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminaccounts.find();
    //console.log(admins);
    const adminsarr = new Array();
    var i = 0;
    for await (const admin of admins) {
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
};

const viewAdmin = async (req, res) => {
  const { email } = req.body;
  try {
    try {
      const adminId = new ObjectId(req.user.Id);
      const admin = await adminaccounts.findOne({ _id: adminId })
      if (admin.Type != "MasterAdmin")
        return res.status(500).send(Response(false, "Action Not Allowed", {}));
    } catch (error) { console.log(error); }
    const admininfo = await adminaccounts.findOne({ Email: email })
    if (admininfo) {
      res.status(201).send(Response(true, "ok", admininfo));
    }
  } catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
};

const removeAdmin = async (req, res) => {
  const { email } = req.body;
  try {
    try {
      const adminId = new ObjectId(req.user.Id);
      const admin = await adminaccounts.findOne({ _id: adminId })
      if (admin.Type != "MasterAdmin")
        return res.status(500).send(Response(false, "Action Not Allowed", {}));
    } catch (error) { console.log(error); }
    await adminaccounts.deleteOne({ Email: email })
      .then(() => {
        res.status(201).send(Response(true, "ok", {}));
      })
      .catch((error) => {
        res.status(500).send(Response(false, "error", error));
      })
  } catch (error) { res.status(500).send(Response(false, "error", error)); }
};

const updatePriviledges = async (req, res) => {
  const { email, type } = req.body;
  try {
    try {
      const adminId = new ObjectId(req.user.Id);
      const admin = await adminaccounts.findOne({ _id: adminId })
      if (admin.Type != "MasterAdmin")
        return res.status(500).send(Response(false, "Action Not Allowed", {}));
    } catch (error) { console.log(error); }
    await adminaccounts.updateOne({ Email: email }, { $set: { Type: type } }, {});
    if (res.status(201)) {
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "ok", {}));
  } catch (error) { res.status(500).send(Response(false, "error", error)); }
};

// Product Management

const uploadMiddleware = upload.single('file');

const addPet = async (req, res) => {
  const { name, gender, colour, cost, height, weight, available, features, category, tags, filename, filebase64 } = req.body;
  let petImage, imagename;
  if (req.file) {
    petImage = fs.readFileSync(req.file.path);
    imagename = req.file.originalname;
  }
  else {
    petImage = filebase64;
    imagename = filename;
  }
  //const petImage = req.file.buffer;
  //console.log(petImage);
  const petscollection = petsDB.collection(category);
  try {
    await petscollection.insertOne({
      Name: name,
      Gender: gender,
      Colour: colour,
      Weight: weight,
      Height: height,
      Cost: cost,
      Available: available,
      Features: features,
      Tags: tags,
      Imagename: imagename,
      Image: petImage // Store the image binary data
    });
    if (res.status(201)) {
      if (req.file) await unlinkAsync(req.file.path);
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
    console.log(error);
  }

};

const updatePet = async (req, res) => {
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const { name, gender, colour, cost, height, weight, available, features, tags, filebase64, filename } = req.body;
  let petImage, imagename;
  if (req.file) {
    petImage = fs.readFileSync(req.file.path);
    imagename = req.file.originalname;
  }
  else {
    petImage = filebase64;
    imagename = filename;
  }
  const petscollection = petsDB.collection(category);
  try {
    await petscollection.updateOne({ _id: pid }, {
      $set: {
        Name: name,
        Gender: gender,
        Colour: colour,
        Weight: weight,
        Height: height,
        Cost: cost,
        Available: available,
        Features: features,
        Tags: tags,
        Imagename: imagename,
        Image: petImage
      }
    }, {});
    if (res.status(201)) {
      if (req.file) await unlinkAsync(req.file.path);
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
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const petscollection = petsDB.collection(category);
  try {
    const deleteResult = await petscollection.deleteOne({ _id: pid });
    if (deleteResult.deletedCount === 1) {
      const count = await petscollection.countDocuments();
      if (count === 0) {
        await petscollection.drop();
      }
      res.status(201).send(Response(true, "ok", {}));
    } else {
      res.status(404).send(Response(false, "Document not found", {}));
    }
  } catch (error) {
    console.error(`Error deleting or dropping collection: ${error}`);
    res.status(500).send(Response(false, "Error", error));
  }
};


const viewPet = async (req, res) => {
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const petscollection = petsDB.collection(category);
  try {
    const pet = await petscollection.findOne({ _id: pid })
    if (pet) {
      //console.log(pet);
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

  const category = req.params.category;
  const petscollection = petsDB.collection(category);
  try {
    const petsdata = await petscollection.find().toArray();
    res.status(201).send(Response(true, "ok", petsdata));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}


const addProduct = async (req, res) => {
  const { name, description, weight, tags, cost, available, category, filename, filebase64 } = req.body;
  let productImage, imagename;
  if (req.file) {
    productImage = fs.readFileSync(req.file.path);
    imagename = req.file.originalname;
  }
  else {
    productImage = filebase64;
    imagename = filename;
  }
  //const petImage = req.file.buffer;
  //console.log(petImage);
  const productscollection = productsDB.collection(category);
  try {
    await productscollection.insertOne({
      Name: name,
      Weight: weight,
      Tags: tags,
      Cost: cost,
      Available: available,
      Description: description,
      Imagename: imagename,
      Image: productImage // Store the image binary data
    });
    if (res.status(201)) {
      if (req.file) await unlinkAsync(req.file.path);
      return res.status(201).send(Response(true, "ok", {}));
    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const { name, description, weight, tags, cost, available, filebase64, filename } = req.body;
  let productImage, imagename;
  if (req.file) {
    productImage = fs.readFileSync(req.file.path);
    imagename = req.file.originalname;
  }
  else {
    productImage = filebase64;
    imagename = filename;
  }
  const productscollection = productsDB.collection(category);
  try {
    await productscollection.updateOne({ _id: pid }, {
      $set: {
        Name: name,
        Weight: weight,
        Tags: tags,
        Cost: cost,
        Available: available,
        Description: description,
        Imagename: imagename,
        Image: productImage
      }
    }, {});
    if (res.status(201)) {
      if (req.file) await unlinkAsync(req.file.path);
      return res.status(201).send(Response(true, "ok", {}));

    }
    else return res.status(500).send(Response(false, "error", {}));
  }
  catch (error) {
    console.log(error);
    return res.status(500).send(Response(false, "error", error));
  }

};

const deleteProduct = async (req, res) => {
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const productscollection = productsDB.collection(category);
  try {
    const deleteResult = await productscollection.deleteOne({ _id: pid });
    if (deleteResult.deletedCount === 1) {
      const count = await productscollection.countDocuments();
      if (count === 0) {
        await productscollection.drop();
      }
      res.status(201).send(Response(true, "ok", {}));
    } else {
      res.status(404).send(Response(false, "Document not found", {}));
    }
  } catch (error) {
    console.error(`Error deleting or dropping collection: ${error}`);
    res.status(500).send(Response(false, "Error", error));
  }
};

const viewProduct = async (req, res) => {
  const pid = new ObjectId(req.params.pId);
  const category = req.params.category;
  const productscollection = productsDB.collection(category);
  try {
    const product = await productscollection.findOne({ _id: pid })
    if (product) {
      return res.status(201).send(Response(true, "ok", product));
    }
    else return res.status(500).send(Response(false, "Not Found", {}));
  }
  catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
}

const viewProductCategories = async (req, res) => {
  try {
    const categories = await productsDB.listCollections().toArray();

    res.status(201).send(Response(true, "ok", categories));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const getAllProducts = async (req, res) => {
  const category = req.params.category;
  const productscollection = productsDB.collection(category);
  try {
    const productsdata = await productscollection.find().toArray();
    res.status(201).send(Response(true, "ok", productsdata));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}


// Customer Managament
const getAllCustomers = async (req, res) => {
  try {
    const customers = await customeraccounts.find().toArray();
    //console.log(customers);
    res.status(201).send(Response(true, "ok", customers));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const viewCustomer = async (req, res) => {
  const cId = new ObjectId(req.params.cId);
  try {
    const customer = await customeraccounts.findOne({ _id: cId });
    //console.log(customer);
    res.status(201).send(Response(true, "ok", customer));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const viewCustomerOrders = async (req, res) => {
  const cId = new ObjectId(req.params.cId);
  try {
    const ordersarr = await orders.find({ CustomerId: cId }).toArray();
    res.status(201).send(Response(true, "ok", ordersarr));
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

const viewOrder = async (req, res) => {
  const oId = new ObjectId(req.params.oId);
  //console.log(oId);
  try {
    const order = await orders.findOne({ _id: oId });
    //console.log(order);
    res.status(201).send(Response(true, "ok", order));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const updateOrderStatus = async (req, res) => {
  const { newstatus } = req.body;
  console.log(newstatus);
  const oId = new ObjectId(req.params.oId);
  try {
    const order = await orders.updateOne({ _id: oId }, { $set: { Status: newstatus } }, {});
    res.status(201).send(Response(true, "ok", order));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const getAllTickets = async (req, res) => {
  try {
    const ticketsinfo = await supportTickets.find().toArray();

    res.status(201).send(Response(true, "ok", ticketsinfo));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const addTicket = async (req, res) => {
  const { name, email, text } = req.body;
  const date = Date.now();
  try {
    await supportTickets.insertOne({
      Name: name,
      Email: email,
      Text: text,
      Status: "Pending",
      CreatedAt: date,
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

const viewTicket = async (req, res) => {
  const tId = new ObjectId(req.params.tId);
  //console.log(oId);
  try {
    const ticket = await supportTickets.findOne({ _id: tId });
    //console.log(order);
    res.status(201).send(Response(true, "ok", ticket));
  }
  catch (error) {
    res.status(500).send(Response(false, "error", error));
  }
}

const updateTicketStatus = async (req, res) => {
  const { newstatus } = req.body;
  console.log(newstatus);
  const tId = new ObjectId(req.params.tId);
  try {
    const ticket = await supportTickets.updateOne({ _id: tId }, { $set: { Status: newstatus } }, {});
    res.status(201).send(Response(true, "ok", ticket));
  }
  catch (error) {
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

const searchinCustomers = async (req, res) => {
  const searchTerm = req.params.search; 
  console.log(searchTerm);
  try {
      const collectionResults = await customeraccounts
          .find({
            $or: [
              { Name: { $regex: searchTerm, $options: 'i' } },
              { Email: { $regex: searchTerm, $options: 'i' } },
              { Phone: { $regex: searchTerm, $options: 'i' } },
              { Address_line1: { $regex: searchTerm, $options: 'i' } },
              { Address_area: { $regex: searchTerm, $options: 'i' } },
              { City: { $regex: searchTerm, $options: 'i' } },
              { Pincode: { $regex: searchTerm, $options: 'i' } },
              { _id: { $regex: searchTerm, $options: 'i' } },
            ],
          })
          .toArray();
        
        res.status(201).send(Response(true, "ok", collectionResults));
  } catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
};

const searchinOrders= async (req, res) => {
  console.log("Here");
  const searchTerm = req.params.search; 
  try {
      const collectionResults = await orders
          .find({
            $or: [
              { CustomerId: { $regex: searchTerm, $options: 'i' } },
              { CreatedAt: { $regex: searchTerm, $options: 'i' } },
              { Amount: { $regex: searchTerm, $options: 'i' } },
              { PaymentMethod: { $regex: searchTerm, $options: 'i' } },
              { Status: { $regex: searchTerm, $options: 'i' } },
              { _id: { $regex: searchTerm, $options: 'i' } },
            ],
          })
          .toArray();
        
        res.status(201).send(Response(true, "ok", collectionResults));
  } catch (error) {
    console.log(error);
    res.status(500).send(Response(false, "error", error));
  }
};


module.exports = {
  adminRegister,
  updateAdmin,
  getAllAdmins,
  viewAdmin,
  removeAdmin,
  updatePriviledges,
  getRoute,
  getEmail,
  getAdminProfile,
  changePassword,

  uploadMiddleware,
  addPet,
  viewPet,
  deletePet,
  updatePet,
  getAllPets,

  viewCategories,

  addProduct,
  viewProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  viewProductCategories,

  getAllCustomers,
  viewCustomer,
  viewCustomerOrders,

  getAllOrders,
  viewOrder,
  updateOrderStatus,
  searchAll,
  searchinCustomers,
  searchinOrders,

  getAllTickets,
  viewTicket,
  updateTicketStatus,
  addTicket
};

