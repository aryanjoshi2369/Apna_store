const express = require("express");
const {
  uploadProduct,
  listProducts,
} = require("../controllers/productController");
const { upload } = require("../middleware/multer");
const adminRouter = express.Router();
console.log("Upload middleware:", upload);

adminRouter.post("/productUpload", upload.single("image"), uploadProduct);
adminRouter.get("/productFetch", listProducts);

module.exports = adminRouter;
