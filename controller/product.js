const productModel = require("../models/product");

exports.createProduct = async (req, res, next) => {
  const createdProduct = await productModel.create(req.body);
  console.log(createdProduct);
  res.status(201).json(createdProduct);
};
