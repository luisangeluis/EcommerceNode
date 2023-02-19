const { DataTypes } = require('sequelize');
const {db} =require('../db/database');

const Category = db.define('category',{
  id:{
    primaryKey:true,
    type:DataTypes.UUID,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING(100),
    allowNull:false
  }
})

module.exports= Category;
