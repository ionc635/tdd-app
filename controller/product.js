const productModel = require("../models/product");

exports.createProduct = (req, res, next) => {
  productModel.create(req.body);
  res.status(201).send();
};
