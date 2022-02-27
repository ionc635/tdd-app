const productModel = require("../models/product");

exports.createProduct = () => {
  productModel.create();
};
