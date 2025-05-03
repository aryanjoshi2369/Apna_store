const express = require("express");
const { uploadProduct } = require("../controllers/productController");

const adminRouter = express.Router();

adminRouter.post("/productUpload", uploadProduct);

module.exports = adminRouter;
