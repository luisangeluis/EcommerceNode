//Dependencies
const router = require('express').Router();
//Services
const productServices = require('../services/products.http');
const productsImages = require('../services/productsImages.http');

router.route('/')
  .get(productServices.getAll)
  .post(productServices.post);

//Post image
router.route('/:id/post-image')
  .post(productsImages.postImage);

router.route('/:id')
  .get(productServices.getById)
  .put(productServices.editById)
  .delete(productServices.removeProduct)

exports.router = router;