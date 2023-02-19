const { DataTypes } = require('sequelize');
const {db} =require('../db/database');

const Product = db.define('product',{
  id:{
    primaryKey:true,
    type:DataTypes.UUID,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  categoryId:{
    allowNull:false,
    type:DataTypes.UUID,
    field:'categoryId'
  },
  price:{
    type:DataTypes.DECIMAL,
    allowNull:false
  },
  isActive:{
    type:DataTypes.BOOLEAN,
    defaultValue:true,
    allowNull:false
  }

})

module.exports= Product;
