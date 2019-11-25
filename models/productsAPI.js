const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    productDescription: { type: String, required: true },
    productImage: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { collection: "Products" }
);

// adds a method to a user document object to create a hashed password

const product = mongoose.model("product", productSchema);
module.exports = product;
