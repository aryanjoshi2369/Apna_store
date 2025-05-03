const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: Number,
    category: String,
    // sku: {
    //     type: String,
    //     required:true,
    //     unique:true
    // }, // stock keeping unit
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    ratings: {
      average: {
        type: Number,
        default: 0,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const productModel =
  mongoose.model.product || mongoose.model("product", productSchema);

module.exports = productModel;
