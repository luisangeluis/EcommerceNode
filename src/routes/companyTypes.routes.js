//Dependencies
const router = require('express').Router();
//Services
const companyTpesServices = require('../services/companyTypes.http');

router.route('/')
  .get(companyTpesServices.getAll)
  .post(companyTpesServices.post);

router.route('/:id')
  .get(companyTpesServices.getById)
  .put(companyTpesServices.editById)
  .delete(companyTpesServices.removeCompanyType);

exports.router = router;
