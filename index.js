const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
const customerRouter = require("./routes/customers.routes");
const { connectToMongo } = require("./database/db");
const adminRouter = require("./routes/admin.routes");
app.use("/customer", customerRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log("Server started");
  });

app.post("/post", async (req, res) => {
    console.log(req.body);
  });

connectToMongo();
