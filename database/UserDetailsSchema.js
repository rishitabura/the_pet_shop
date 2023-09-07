const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema(
    {
        Email: String,
        Password: String,
        Name: String,
        Phone: String,
        DOB: Date,
        Address_line1: String,
        Address_area: String,
        City: String,
        Pincode: String
    },
    {
        collection: "CustomerAccountInfo",
    }

);

mongoose.model("CustomerAccountInfo", UserDetailsSchema);