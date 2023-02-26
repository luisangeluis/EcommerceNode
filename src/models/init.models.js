const Product = require('./product.model');
const Category = require('./category.model');
const ProductImage = require('./productImage.model');

const initModels=()=>{
  //category -> product
  Category.hasMany(Product);
  Product.belongsTo(Category);

  //product->productImage
  Product.hasMany(ProductImage);
  ProductImage.belongsTo(Product);
  
  console.log('init models');
} 

module.exports=initModels;