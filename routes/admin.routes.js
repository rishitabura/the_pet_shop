const express = require("express");
const adminRouter = express.Router();
const {
  adminRegister,
  removeAdmin,
  updatePriviledges,
  getAllAdmins,
  viewAdmin,
  updateAdmin,
  fetchAdmin,

  addPet,
  updatePet,
  deletePet,
  viewPet,
  viewCategories,
  getAllPets,
  
  getAllCustomers,

  getAllOrders
} = require("../controllers/admin.controllers");

// Master Admin
adminRouter.post("/registerNewAdmin", adminRegister);
adminRouter.post("/fetchaccount", fetchAdmin);
adminRouter.post("/profile", updateAdmin);
adminRouter.post("/getalladmins", getAllAdmins);
adminRouter.post("/viewAdmin", viewAdmin);
adminRouter.post("/removeAdmin", removeAdmin);
adminRouter.post("/updatePriviledges", updatePriviledges);

// Product Management
adminRouter.post("/addpet", addPet);
adminRouter.post("/updatepet", updatePet);
adminRouter.post("/deletepet", deletePet);
adminRouter.post("/viewpet", viewPet);
adminRouter.post("/viewCategories", viewCategories);
adminRouter.post("/getAllPets", getAllPets);

// Customer Management
adminRouter.post("/getAllCustomers", getAllCustomers);

// Orders
adminRouter.post("/getAlLOrders", getAllOrders);



module.exports = adminRouter;
