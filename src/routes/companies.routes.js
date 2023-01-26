//Dependencies
const router = require('express').Router();
//Services
const companiesServices = require('../services/companies.http');

router.route('/').get(companiesServices.getAll);

exports.router =router;