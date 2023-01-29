
//Depedencies
const uuid = require('uuid');
//Models
const CompanyTypes = require('../models/companyType.model');

/**
 * Get all company types
 * @returns {Object} Return all company types
 */
const readAllCompanyTypes = async () => {
  const response = await CompanyTypes.findAll({
    attributes: ['id', 'name']
  });

  return response;
}

/**
 *  Get a company type by id
 * @param {Integer} id Gets the company type id 
 * @returns {Object} returns the company type found
 */
const readCompanyTypesById = async (id) => {
  const response = await CompanyTypes.findOne({
    where: { id },
    attributes: ['id', 'name']
  })

  return response;
}

/**
 * Create a company type
 * @param {Object} data Gets data to create a company type
 * @returns {object} return the company type created
 */
const createCompanyType = async (data) => {
  const response = await CompanyTypes.create({
    ...data,
    id: uuid.v4()
  })

  return response;
}

/**
 * Update a company type
 * @param {Integer} companyTypeId Get the company type id 
 * @param {Object} data Gets data to update a company type
 * @returns {Object} return response
 */
const updateCompanyType = async (companyTypeId, data) => {
  const { id, ...restOfData } = data;

  const response = await CompanyTypes.update(
    restOfData,
    { where: { id: companyTypeId } }
  )

  return response;
}

/**
 * Delete a company type
 * @param {Integer} id Gets the company id 
 * @returns {Object} return response
 */
const deleteCompanyType = async (id) => {
  const response = await CompanyTypes.destroy({
    where: { id }
  })

  return response;
}

module.exports = {
  readAllCompanyTypes,
  readCompanyTypesById,
  createCompanyType,
  updateCompanyType,
  deleteCompanyType
}


