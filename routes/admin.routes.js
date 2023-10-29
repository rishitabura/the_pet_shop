const express = require("express");
const adminRouter = express.Router();
const {
  adminRegister,
  removeAdmin,
  updatePriviledges,
  getAllAdmins,
  viewAdmin,
  updateAdmin,
  getRoute,
  getEmail,
  getAdminProfile,
  changePassword,

  uploadMiddleware,
  addPet,
  updatePet,
  deletePet,
  viewPet,
  viewCategories,

  getAllPets,

  addProduct,
  updateProduct,
  deleteProduct,
  viewProduct,
  viewProductCategories,
  getAllProducts,
  
  getAllCustomers,
  viewCustomer,
  viewCustomerOrders,

  getAllOrders,
  viewOrder,
  updateOrderStatus,
} = require("../controllers/admin.controllers");
const fetchUser = require("../middleware/fetchuser.middleware");

// Admin Accounts and Master Admin
adminRouter.post("/getEmail", fetchUser, getEmail);
adminRouter.post("/registerNewAdmin", fetchUser, adminRegister);
adminRouter.post("/fetchprofile", fetchUser, getRoute);
adminRouter.put("/profile", fetchUser, updateAdmin);
adminRouter.get("/:adminId", getAdminProfile);
adminRouter.post("/:adminId/changePassword", fetchUser, changePassword);
  //adminRouter.put("/update/:Id",  fetchUser, updateAdmin);
adminRouter.post("/getalladmins", getAllAdmins);
adminRouter.post("/viewAdmin", fetchUser, viewAdmin);
adminRouter.post("/removeAdmin", fetchUser, removeAdmin);
adminRouter.post("/updatePriviledges", fetchUser, updatePriviledges);

// Pet Management
adminRouter.post("/pet/add", uploadMiddleware, addPet);
adminRouter.post("/pet/:category/:pId/update",  uploadMiddleware, updatePet);
adminRouter.post("/pet/:category/:pId/delete",  deletePet);
adminRouter.post("/pet/:category/:pId/view",  viewPet);
adminRouter.post("/pet/viewCategories", viewCategories);
adminRouter.post("/pet/:category/getAll", getAllPets);

// Product Management
adminRouter.post("/product/add", uploadMiddleware, addProduct);
adminRouter.post("/product/:category/:pId/update",  uploadMiddleware, updateProduct);
adminRouter.post("/product/:category/:pId/delete", deleteProduct);
adminRouter.post("/product/:category/:pId/view", viewProduct);
adminRouter.post("/product/viewCategories", viewProductCategories);
adminRouter.post("/product/:category/getAll", getAllProducts);

// Customer Management
adminRouter.get("/customers/getAllCustomers", getAllCustomers);
adminRouter.get("/customers/:cId", viewCustomer);
adminRouter.get("/customers/:cId/orders", viewCustomerOrders);

// Order Management
adminRouter.get("/orders/getAllOrders", getAllOrders);
adminRouter.get("/orders/:oId", viewOrder);
adminRouter.put("/orders/:oId", updateOrderStatus);

module.exports = adminRouter;
