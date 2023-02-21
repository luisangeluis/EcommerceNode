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
  status:{
    type:DataTypes.STRING,
    defaultValue:'active',//active,suspended,deleted
    allowNull:false
  }

})

module.exports= Product;
