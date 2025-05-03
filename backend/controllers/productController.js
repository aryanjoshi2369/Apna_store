const productModel = require("../models/productModel");

const uploadProduct = async (req, res) => {
  try {
    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discountedPrice: req.body.discountedPrice,
      category: req.body.category,
      stock: req.body.stock,
      image: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : undefined,
      ratings: {
        average: req.body.ratings?.average || 0,
        count: req.body.ratings?.count || 0,
      },
      isActive: req.body.isActive ?? true,
    });
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    console.log(products);
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products", error);
    res
      .status(500)
      .json({ success: false, message: "failed to fetch products" });
  }
};

module.exports = { uploadProduct, listProducts };
