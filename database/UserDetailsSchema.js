const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema(
    {
        uemail: String,
        upass: String,
        uname: String,
        uphone: String
    },
    {
        collection: "CustomerAccountInfo",
    }

);

mongoose.model("CustomerAccountInfo", UserDetailsSchema);