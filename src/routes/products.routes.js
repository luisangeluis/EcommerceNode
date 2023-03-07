//Dependencies
const router = require('express').Router();
//Middlewares
const { productExist } = require('../middlewares/products/productExist');
// const { productExist } = require('../middlewares/products/productExist');
//Utils
const uploader = require('../utils/uploadFIles');
//Services
const productServices = require('../services/products.http');
const productsImages = require('../services/productsImages.http');

router.route('/')
  .get(productServices.getAll)
  .post(productServices.post);

//Post image
router.route('/:id/post-image')
  .post(productExist,uploader, productsImages.postImage);

router.route('/:id')
  .get(productServices.getById)
  .put(productServices.editById)
  .delete(productServices.removeProduct)

exports.router = router;