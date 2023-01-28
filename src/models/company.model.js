const { DataTypes } = require('sequelize');
const {db} =require('../db/database');

const Company = db.define('company',{
  id:{
    primaryKey:true,
    type:DataTypes.UUID,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  constitutionDate:{
    type:DataTypes.DATEONLY,
    allowNull:false,
    field:'constitution_date'
  },
  typeId:{
    allowNull:false,
    type:DataTypes.UUID,
    field:'companyTypeId'
  },
  comments:{
    type:DataTypes.TEXT
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue: true,
    field:'is_active'
  }

})

module.exports= Company;
