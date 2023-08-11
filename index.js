// https://blog.nextideatech.com/how-to-get-started-with-the-mern-stack-a-comprehensive-guide/
const express = require("express");
const { MongoClient } = require("mongodb");
//const connectToMongoose = require("./database/db");
const app = express();
app.use(express.json());
// const customerRouter = require("./routes/customer.routes");
// const shopRouter = require("./routes/shop.routes");
// const adminRouter = require("./routes/admin.routes");

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");
JWT_SECRET = "petbazaarjwttoken39";

require("dotenv").config({ path: "./config.env" });
const uri = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started");
  });

app.post("/post", async (req, res) => {
    console.log(req.body);
  });
   
const client = new MongoClient(uri);
  
client.connect()
.then(() => { console.log("Connected to database"); })
.catch(e => console.log(e));
  
const dbName = "CustomerDB";
const collectionName = "CustomerAccountInfo";
const database = client.db(dbName);
const collection = database.collection(collectionName);
  
app.post("/register", async (req, res) => {
    const { uname, email, phone, password } = req.body;
    //const data1 = req.body;
    //console.log(data1);
    try {
      const oldUser = await collection.findOne({ _id: email });
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await collection.insertOne({
        _id: email,
        Name: uname,
        Phone: phone,
        Password: password,
      });
      res.send({ status: "Ok" });
    }
    catch (error) {
      res.send({ status: "error" });
    }
  });
  
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await collection.findOne({ _id: email, Password: password });
      if (!user) {
        return res.json({ error: "Invalid Credentials" });
      }
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      if (res.status(201)) {
        return res.json({ status: "Ok", data: token });
  
      }
      else return res.json({ error: "Error" });
    }
    catch (error) {
      res.send({ status: "error" });
    }
  });
  
app.post("/userdata", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const userid = user._id;
      await collection.findOne({ _id: userid })
        .then((userdata) => {
          res.send({ status: "Ok", data: userdata });
        })
        .catch((error) => {
          res.send({ status: "Error", data: error });
        })
    } catch (error) { }
  });
  