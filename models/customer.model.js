const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    Email: String,
    Password: String,
    Name: String,
    Phone: String,
    DOB: Date,
    Address_line1: String,
    Address_area: String,
    City: String,
    Pincode: String,
    createdAt: Date,
});

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;