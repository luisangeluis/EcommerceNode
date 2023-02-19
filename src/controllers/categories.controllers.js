
//Depedencies
const uuid = require('uuid');
//Models
const Categories = require('../models/category.model');

/**
 * Get all categories
 * @returns {Object} Return all categories
 */
const readAllCategories = async () => {
  const response = await Categories.findAll({
    attributes: ['id', 'name']
  });

  return response;
}

/**
 *  Get a category by id
 * @param {Integer} id Gets the category id 
 * @returns {Object} returns the category found
 */
const readCategoryById = async (id) => {
  const response = await Categories.findOne({
    where: { id },
    attributes: ['id', 'name']
  })

  return response;
}

/**
 * Create a category
 * @param {Object} data Gets data to create a category
 * @returns {object} return the category created
 */
const createCategory = async (data) => {
  const response = await Categories.create({
    ...data,
    id: uuid.v4()
  })

  return response;
}

/**
 * Update a category
 * @param {Integer} categoryId Get the category id 
 * @param {Object} data Gets data to update a category type
 * @returns {Object} return response
 */
const updateCategory = async (categoryId, data) => {
  const { id, ...restOfData } = data;

  const response = await Categories.update(
    restOfData,
    { where: { id: categoryId } }
  )

  return response;
}

/**
 * Delete a category
 * @param {Integer} id Gets the category id 
 * @returns {Object} return response
 */
const deleteCategory = async (id) => {
  const response = await Categories.destroy({
    where: { id }
  })

  return response;
}

module.exports = {
  readAllCategories,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}


