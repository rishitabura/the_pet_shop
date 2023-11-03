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
  viewOrder,

  searchAll
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
customerRouter.put("/cart/add/:p/:cat/:pId", fetchUser, addToCart);
customerRouter.put("/cart/remove/:p/:cat/:pId", fetchUser, removefromCart);
customerRouter.post("/cart/view", fetchUser, viewCart);
customerRouter.post("/cart/purchase", fetchUser, purchaseCart);
customerRouter.post("/orders/", fetchUser, getOrders);
customerRouter.get("/orders/:oId", viewOrder);

// other
customerRouter.get("/search/:search", searchAll);

//customerRouter.post("/verifyOTP", verifyOTP);
//customerRouter.post("/forgotPassword", forgotPassword);
//customerRouter.post("/resendOtp", resendOtp);
//customerRouter.post("/resetPassword/:id/:token", resetPassword);
//customerRouter.put("/update/:Id",  fetchUser, updateCustomer);

module.exports = customerRouter;

