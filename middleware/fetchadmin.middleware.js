// let jwt = require("jsonwebtoken");
// const Admin = require("../models/admin.model");
// require("dotenv").config({ path: "./config.env" });
// function Response(success, msg, data) {
//   let response = { success: success, msg: msg, data: data };
//   return response;
// }

// const fetchadmin = async (req, res, next) => {
//   const token = req.header("authtoken");
//   if (!token) {
//     return res.status(401).send(Response(false, "Token not provided", {}));
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = decoded; // check from database
//     console.log("Id!?", req.admin);
//     next();
//   } catch (err) {
//     return res.status(400).send(Response(false, "Invalid Token!", {}));
//   }
// };

// module.exports = fetchadmin;