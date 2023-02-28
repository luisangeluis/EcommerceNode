// const ProductsControllers = require('./products.controllers');
const uuid = require('uuid');
const ProductsImages = require('../models/productImage.model');

const createProductImage = async (productId, data) => {
  const response = await ProductsImages.create({
    ...data,
    productId,
    id: uuid.v4()
  })

  return response;
}

module.exports = {
  createProductImage
}