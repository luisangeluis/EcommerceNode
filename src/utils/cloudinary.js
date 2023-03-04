const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploadToCloudinary = async(filePath)=>{
  return await cloudinary.uploader.upload(filePath,{
    folder:'images-product'
  }); 
}

module.exports={
  uploadToCloudinary
}