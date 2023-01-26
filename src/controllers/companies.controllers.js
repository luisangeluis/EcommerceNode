//Dependencies
const uuid = require('uuid');
//Models
const Companies = require('../models/company.model');

const readAllCompanies = async () => {
  const data = await Companies.findAll({
    where:{isActive:true}
  });

  return data;
}

module.exports = {
  readAllCompanies
}