//Dependencies
const router = require('express').Router();
//Services
const categoryServices = require('../services/categories.http');

router.route('/')
  .get(categoryServices.getAll)
  .post(categoryServices.post);

router.route('/:id')
  .get(categoryServices.getById)
  .put(categoryServices.editById)
  .delete(categoryServices.removeCategory);

exports.router = router;
