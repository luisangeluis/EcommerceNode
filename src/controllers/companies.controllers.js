//Dependencies
const uuid = require('uuid');
//Models
const Companies = require('../models/company.model');
const CompanyTypes = require('../models/companyType.model');

/**
 * Gets all companies where isActive equals true
 * @returns {Object} Return all companies
 */
const readAllCompanies = async () => {
  const response = await Companies.findAll({
    where: { isActive: true },
    attributes: ['id', 'name', 'constitutionDate', 'constitutionDate', 'comments', 'isActive'],
    include: [
      {
        model: CompanyTypes,
        attributes: ['id', 'name']
      }
    ]
  });

  return response;
}

/**
 * Get company by id
 * @param {Integer} id Gets the company id 
 * @returns {Object} Returns the company found
 */
const readCompanyById = async (id) => {
  const response = await Companies.findOne({
    where: { id },
    attributes: ['id', 'name', 'constitutionDate', 'typeId', 'constitutionDate', 'comments', 'isActive']

  })

  return response;
}

/**
 * Create a company
 * @param {Object} data Gets data to create a company
 * @returns {Object} returns the company created
 */
const createCompany = async (data) => {
  const response = await Companies.create({
    ...data,
    id: uuid.v4()

  })

  return response;
}

/**
 * Update a company
 * @param {Integer} companyId Get the company id
 * @param {Object} data Gets data to update a company
 * @returns {Object}Return response
 */
const updateCompany = async (companyId, data) => {
  const { id, ...restOfData } = data;
  const response = await Companies.update(
    restOfData,
    { where: { id: companyId } }
  )

  return response;
}

/**
 * Delete a company
 * @param {Integer} id Gets the company id 
 * @returns {Object}return response
 */
const deleteCompany = async (id) => {
  const response = await Companies.destroy({
    where: { id }
  })

  return response;
}

module.exports = {
  readAllCompanies,
  readCompanyById,
  createCompany,
  updateCompany,
  deleteCompany
}