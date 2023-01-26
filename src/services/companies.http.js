const Companies = require('../controllers/companies.controllers');

const getAll = (req, res) => {
  Companies.readAllCompanies()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ error }))

}

module.exports={
  getAll
}