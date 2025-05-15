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

const removeProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product" });
  }
};

const updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (!product) {
      res.status(400).json({ success: false, message: "product not found" });
    }

    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.discountedPrice =
      req.body.discountedPrice ?? product.discountedPrice;
    product.category = req.body.category ?? product.category;
    product.stock = req.body.stock ?? product.stock;
    product.isActive = req.body.isActive ?? product.isActive;

    if (req.body.ratings) {
      product.ratings.average =
        req.body.ratings.average ?? product.ratings.average;
      product.ratings.count = req.body.ratings.count ?? product.ratings.count;
    }

    if (req.file) {
      product.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update product" });
  }
};

module.exports = { uploadProduct, listProducts, removeProduct, updateProducts };
