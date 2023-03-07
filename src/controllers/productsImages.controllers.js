//Dependencies
const uuid = require('uuid');
const fs = require('fs-extra');
//Utils
const { uploadToCloudinary } = require('../utils/cloudinary');
//Models
const ProductsImages = require('../models/productImage.model');

// const createProductImage = async (productId, data) => {
//   const response = await ProductsImages.create({
//     ...data,
//     productId,
//     id: uuid.v4()
//   })

//   return response;
// }

const createProductImage = async(productId, file) => {
  try{  
    const uploadedImage = await uploadToCloudinary(file.image.tempFilePath); 
    
    console.log({uploadedImage});

    const response = await ProductsImages.create({
      name:uploadedImage.original_filename,
      url:uploadedImage.secure_url,
      productId,
      cloudId:uploadedImage.public_id,
      id:uuid.v4()
    })

    await fs.unlink(file.image.tempFilePath);


    return response;

  }catch(error){
    return error;

  }
  
}

module.exports = {
  createProductImage
}