const productController = require("../../controller/product");
const productModel = require("../../models/product");

productModel.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call productModel.create", () => {
    productController.createProduct();
    expect(productModel.create).toBeCalled();
  });
});
