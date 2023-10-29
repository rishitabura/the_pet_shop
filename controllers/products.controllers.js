const { ObjectId } = require('mongodb');

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { productsDB, orders } = require("../database/db.js");
//const nodemailer = require("nodemailer");
//const imagesize = require("image-size");
//const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

function Response(success, msg, data) {
    let response = { success: success, msg: msg, data: data };
    return response;
}

// Product Management

const viewProduct = async (req, res) => {
    const pid = new ObjectId(req.params.pId);
    const category = req.params.category;
    const productscollection = productsDB.collection(category);
    try {
        const product = await productscollection.findOne({ _id: pid })
        if (product) {
            return res.status(201).send(Response(true, "ok", product));
        }
        else return res.status(500).send(Response(false, "product Not Found", {}));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(Response(false, "error", error));
    }
}

const purchaseProduct = async (pId, category, qty) => {
    try {
      const productscollection = productsDB.collection(category);
      const pid = new ObjectId(pId);
      const product = await productscollection.findOne({ _id: pid });
  
      if (product) {
        if (product.Available >= qty) {
          await productscollection.updateOne({ _id: pid }, {
            $set: {
              Available: product.Available - qty,
            }
          });
  
          return { success: true, message: 'Purchase successful' };
        } else {
          return { success: false, message: 'Requested Quantity Unavailable' };
        }
      } else {
        return { success: false, message: 'product Not Found' };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error processing purchase', error };
    }
};

const viewCategories = async (req, res) => {
    try {
        const categories = await productsDB.listCollections().toArray();

        res.status(201).send(Response(true, "ok", categories));
    }
    catch (error) {
        res.status(500).send(Response(false, "error", error));
    }
}

const getAllProducts = async (req, res) => {

    const category = req.params.category;
    const productscollection = productsDB.collection(category);
    //console.log(category);
    try {
        const productsdata = await productscollection.find().toArray();
        //console.log(productsdata);
        res.status(201).send(Response(true, "ok", productsdata));
    }
    catch (error) {
        res.status(500).send(Response(false, "error", error));
    }
}

const getCollectionsWithTag = async (req, res) => {
  const { searchTag } = req.params; 
  const allCollections = await productsDB.listCollections().toArray(); // Get a list of all collections
  const collectionsWithSimilarTag = [];
  for (const collection of allCollections) {
    const collectionName = collection.name;
    const productsCollection = productsDB.collection(collectionName);
    const matchingProducts = await productsCollection.find({ Tags: searchTag }).toArray();
    if (matchingProducts.length > 0) {
      collectionsWithSimilarTag.push(collectionName);
    }
  }
  if (collectionsWithSimilarTag.length > 0) {
    //console.log(collectionsWithSimilarTag);
    return res.status(200).send(Response(true, "ok", collectionsWithSimilarTag));
  } else {
    return res.status(404).send(Response(false, "No collections with matching pets found", {}));
  }
};



module.exports = {

    viewProduct,
    purchaseProduct,
    getAllProducts,
    viewCategories,
    getCollectionsWithTag
};

