//Dependencies
const router = require('express').Router();
//Services
const companiesServices = require('../services/companies.http');

router.route('/')
  .get(companiesServices.getAll)
  .post(companiesServices.post);

router.route('/:id')
  .get(companiesServices.getById)
  .put(companiesServices.editById)
  .delete(companiesServices.removeCompany)

exports.router = router;