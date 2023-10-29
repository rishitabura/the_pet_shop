const express = require("express");
const customerRouter = express.Router();

const {
  customerRegister,
  loginRoute,
  getRoute,
  getCustomerProfile,
  updateCustomer,
  changePassword,

  addToCart,
  viewCart,
  removefromCart,
  purchaseCart,
  getOrders,
  viewOrder
} = require("../controllers/customers.controllers");
const fetchUser = require("../middleware/fetchuser.middleware");
//const multer = require("multer");
//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });

// Account Management
customerRouter.post("/register", customerRegister);
customerRouter.post("/login", loginRoute);
customerRouter.post("/fetchprofile", fetchUser, getRoute);
customerRouter.put("/profile", fetchUser, updateCustomer);
customerRouter.get("/:customerId", getCustomerProfile);
customerRouter.post("/:customerId/changePassword", fetchUser, changePassword);

//cart
customerRouter.put("/:customerId/cart/add/:p/:cat/:pId", addToCart);
customerRouter.put("/:customerId/cart/remove/:p/:cat/:pId", removefromCart);
customerRouter.get("/:customerId/cart/view", viewCart);
customerRouter.post("/:customerId/cart/purchase", purchaseCart);
customerRouter.get("/:customerId/orders/", getOrders);
customerRouter.get("/:customerId/orders/:oId", viewOrder);
//customerRouter.post("/verifyOTP", verifyOTP);
//customerRouter.post("/forgotPassword", forgotPassword);
//customerRouter.post("/resendOtp", resendOtp);
//customerRouter.post("/resetPassword/:id/:token", resetPassword);
//customerRouter.put("/update/:Id",  fetchUser, updateCustomer);

module.exports = customerRouter;

