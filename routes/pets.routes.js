const express = require("express");
const petRouter = express.Router();
const {
    viewPet,
    getAllPets,
    viewCategories,
    getCollectionsWithTag


} = require("../controllers/pets.controllers");

petRouter.post("/:category/:pId/view",  viewPet);
petRouter.post("/viewCategories", viewCategories);
petRouter.post("/:category/getAll", getAllPets);
petRouter.post("/tags/:searchTag", getCollectionsWithTag);

module.exports = petRouter;
