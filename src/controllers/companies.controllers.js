//Dependencies
const uuid = require('uuid');
//Models
const Companies = require('../models/company.model');

const readAllCompanies = async () => {
  const response = await Companies.findAll({
    where: { isActive: true },
    attributes: ['id', 'name', 'constitutionDate','typeId', 'constitutionDate','comments','isActive']
  });

  return response;
}

const readCompanyById = async (id) => {
  const response = await Companies.findOne({
    where: { id },
    attributes: ['id', 'name', 'constitutionDate','typeId', 'constitutionDate','comments','isActive']
  })

  return response;
}

const createCompany = async (data) => {
  const response = await Companies.create({
    ...data,
    id: uuid.v4()

  })

  return response;
}

const updateCompany = async (companyId, data) => {
  const {id,...restOfData} = data;
  const response = await Companies.update(
    restOfData,
    { where: { id:companyId } }
  )

  return response;
}

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