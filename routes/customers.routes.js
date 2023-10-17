const express = require("express");
const customerRouter = express.Router();
const {
  customerRegister,
  loginRoute,
  fetchCustomer,
  updateCustomer
} = require("../controllers/customers.controllers");
const Customer = require("../models/customer.model");
//const fetchcustomer = require("../middlewares/fetchcustomer.middleware");
const { verify } = require("jsonwebtoken");
//const multer = require("multer");
//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });

// Account Management
customerRouter.post("/register", customerRegister);
customerRouter.post("/login", loginRoute);
customerRouter.post("/fetchaccount", fetchCustomer);
customerRouter.post("/profile", updateCustomer);
//customerRouter.post("/forgotPassword", forgotPassword);
//customerRouter.post("/resetPassword/:id/:token", resetPassword);

// Orders


module.exports = customerRouter;
