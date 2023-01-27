
//Depedencies
const uuid = require('uuid');
//Models
const CompanyTypes = require('../models/companyType.model');

const readAllCompanyTypes = async () => {
  const response = await CompanyTypes.findAll({
    attributes: ['id', 'name']
  });

  return response;
}

const readCompanyTypesById = async (id) => {
  const response = await CompanyTypes.findOne({
    where: { id },
    attributes: ['id','name' ]
  })

  return response;
}

const createCompanyType = async (data) => {
  const response = await CompanyTypes.create({
    ...data,
    id: uuid.v4()
  })

  return response;
}

const updateCompanyType = async (companyTypeId, data) => {
  const { id, ...restOfData } = data;

  const response = await CompanyTypes.update(
    restOfData,
    {where: { id:companyTypeId }}
  )

  return response;
}

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


