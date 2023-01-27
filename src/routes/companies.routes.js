//Dependencies
const router = require('express').Router();
//Services
const companiesServices = require('../services/companies.http');

router.route('/').get(companiesServices.getAll);

router.route('/:id').get(companiesServices.getById);

exports.router =router;