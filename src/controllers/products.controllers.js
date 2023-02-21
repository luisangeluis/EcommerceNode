//Dependencies
const uuid = require('uuid');
//Models
const Products = require('../models/product.model');
const Categories = require('../models/category.model');

/**
 * Gets all products where isActive equals true
 * @returns {Object} Return all products where isActive property is true
 */
const readAllProducts = async () => {
  const response = await Products.findAll({
    where: { status: 'active' },
    attributes: ['id', 'name', 'description', 'categoryId', 'price','status'],
    include: [
      {
        model: Categories,
        attributes: ['id', 'name']
      }
    ]
  });

  return response;
}

/**
 * Get product by id
 * @param {Integer} id Gets the product id 
 * @returns {Object} Returns the product found where isActive property is true
 */
const readProductById = async (id) => {
  const response = await Products.findOne({
    where: { id, status: 'active' },
    attributes: ['id', 'name', 'description', 'categoryId', 'price','status']

  })

  return response;
}

/**
 * Create a product
 * @param {Object} data Gets data to create a product
 * @returns {Object} returns the product created
 */
const createProduct = async (data) => {
  const response = await Products.create({
    ...data,
    id: uuid.v4()

  })

  return response;
}

/**
 * Update a product
 * @param {Integer} productId Get the product id
 * @param {Object} data Gets data to update a product
 * @returns {Object}Return response
 */
const updateProduct = async (productId, data) => {
  const { id, ...restOfData } = data;
  const response = await Products.update(
    restOfData,
    { where: { id: productId } }
  )

  return response;
}

/**
 * Delete a product
 * @param {Integer} id Gets the product id 
 * @returns {Object}return response
 */
const deleteProduct = async (id) => {
  const response = await Products.update(
    { status: 'deleted' },
    { where: { id } }
  )

  return response;
}

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct
}