const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });

const mongoURI = process.env.CONNECTION_STRING;
const client = new MongoClient(mongoURI);

const connectToMongo = () => {
 
  client.connect()
  .then(() => { console.log("Connected to database"); })
  .catch(e => console.log(e));
};

const DB = client.db("PetBazaarDB");
const customeraccounts = DB.collection("CustomerAccountInfo");
const customercarts = DB.collection("Carts");
const supportTickets = DB.collection("SupportTickets");
const orders = DB.collection("Orders");
const adminaccounts = DB.collection("AdminAccountInfo");
const petsDB = client.db("petsDB");
const productsDB = client.db("productsDB");

module.exports = {
  connectToMongo,
  customeraccounts,
  adminaccounts,
  orders,
  petsDB,
  productsDB,
  customercarts,
  supportTickets
};