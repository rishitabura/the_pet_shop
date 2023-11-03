const express = require("express");
const productRouter = express.Router();
const {
    viewProduct,
    getAllProducts,
    viewCategories,
    getCollectionsWithTag

} = require("../controllers/products.controllers");

productRouter.post("/:category/:pId/view",  viewProduct);
productRouter.post("/viewCategories", viewCategories);
productRouter.post("/:category/getAll", getAllProducts);
productRouter.post("/tags/:searchTage", getCollectionsWithTag);


module.exports = productRouter;
