const ProductsControllers = require('./products.controllers');

const createProductImage = async (id, file) => {
  try{
    const product = await ProductsControllers.readProductById(id);
    
  }catch(error){
    return error;
  }
}

module.exports = {
  createProductImage
}