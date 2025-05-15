const express = require("express");
const {
  uploadProduct,
  listProducts,
  removeProduct,
  updateProducts,
} = require("../controllers/productController");
const { upload } = require("../middleware/multer");
const adminRouter = express.Router();

console.log("updateProduct test:", updateProducts);

console.log("Upload middleware:", upload);

adminRouter.post("/productUpload", upload.single("image"), uploadProduct);
adminRouter.get("/productFetch", listProducts);
adminRouter.delete("/productDelete/:id", removeProduct);
adminRouter.put("/productUpdate/:id", upload.single("image"), updateProducts);

module.exports = adminRouter;
