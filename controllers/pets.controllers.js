const { ObjectId } = require('mongodb');

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { petsDB, orders } = require("../database/db.js");
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

const viewPet = async (req, res) => {
    const pid = new ObjectId(req.params.pId);
    const category = req.params.category;
    const petscollection = petsDB.collection(category);
    try {
        const pet = await petscollection.findOne({ _id: pid })
        if (pet) {
            return res.status(201).send(Response(true, "ok", pet));
        }
        else return res.status(500).send(Response(false, "Pet Not Found", {}));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(Response(false, "error", error));
    }
}

const purchasePet = async (pId, category, qty) => {
    try {
      const petscollection = petsDB.collection(category);
      const pid = new ObjectId(pId);
      const pet = await petscollection.findOne({ _id: pid });
  
      if (pet) {
        if (pet.Available >= qty) {
          await petscollection.updateOne({ _id: pid }, {
            $set: {
              Available: pet.Available - qty,
            }
          });
  
          return { success: true, message: 'Purchase successful' };
        } else {
          return { success: false, message: 'Requested Quantity Unavailable' };
        }
      } else {
        return { success: false, message: 'Pet Not Found' };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error processing purchase', error };
    }
};
  

const viewCategories = async (req, res) => {
    try {
        const categories = await petsDB.listCollections().toArray();

        res.status(201).send(Response(true, "ok", categories));
    }
    catch (error) {
        res.status(500).send(Response(false, "error", error));
    }
}

const getAllPets = async (req, res) => {

    const category = req.params.category;
    //console.log(category);
    const petscollection = petsDB.collection(category);
    try {
        const petsdata = await petscollection.find().toArray();
        //console.log(petsdata);
        res.status(201).send(Response(true, "ok", petsdata));
    }
    catch (error) {
        res.status(500).send(Response(false, "error", error));
    }
}

const getCollectionsWithTag = async (req, res) => {
  const { searchTag } = req.params; 
  const allCollections = await petsDB.listCollections().toArray(); // Get a list of all collections
  const collectionsWithSimilarTag = [];
  for (const collection of allCollections) {
    const collectionName = collection.name;
    const petsCollection = petsDB.collection(collectionName);
    const matchingPets = await petsCollection.find({ Tags: searchTag }).toArray();
    if (matchingPets.length > 0) {
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

    viewPet,
    purchasePet,
    getAllPets,
    viewCategories,
    getCollectionsWithTag
};

