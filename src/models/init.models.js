const Product = require('./product.model');
const Category = require('./category.model');

const initModels=()=>{
  //category -> product
  Category.hasMany(Product);
  Product.belongsTo(Category);
  console.log('init models');
} 

module.exports=initModels;