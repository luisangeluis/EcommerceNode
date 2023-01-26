const Company = require('./company.model');
const CompanyType = require('./companyType.model');

const initModels=()=>{
  //CompanyType -> Company
  CompanyType.hasMany(Company);
  Company.belongsTo(CompanyType);
} 

module.exports=initModels;