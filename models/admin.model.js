const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema(
    {
        Email: String,
        Password: String,
        Name: String,
        Phone: String,
        DOB: Date,
        Type: String,
    }

);

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;