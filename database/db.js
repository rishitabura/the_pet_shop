const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });

const mongoURI = process.env.CONNECTION_STRING;
const client = new MongoClient(mongoURI);

const connectToMongo = () => {
 
  client.connect()
  .then(() => { console.log("Connected to database"); })
  .catch(e => console.log(e));
};

const customerDB = client.db("CustomerDB");
const customeraccounts = customerDB.collection("CustomerAccountInfo");
const orders = customerDB.collection("Orders");
const adminDB = client.db("AdminDB");
const adminaccounts = adminDB.collection("AdminAccountInfo");
const petsDB = client.db("petsDB");

module.exports = {
  connectToMongo,
  customeraccounts,
  adminaccounts,
  petsDB,
  orders
};