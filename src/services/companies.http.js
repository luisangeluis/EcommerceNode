const Companies = require('../controllers/companies.controllers');

const getAll = (req, res) => {
  Companies.readAllCompanies()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ error }))
}

const getById = (req, res) => {
  const id = req.params.id;

  Companies.readCompanyById(id)
    .then(response => {
      if (response) return res.status(200).json(response)
      else return res.status(404).json(response)
    })
    .catch(error => res.status(400).json(error))
}

const post = (req, res) => {
  const data = req.body;

  if (!Object.keys(data).length)
    return res.status(400).json({ message: 'Missing data' });

  if (!data.name || !data.constitutionDate || !data.typeId)
    return res.status(400).json({
      message: 'At least these fields must be entered',
      fields: {
        name: 'Type a string',
        constitutionDate: 'Type a date',
        typeId: 'Enter company type id'
      }
    })

  Companies.createCompany(data)
    .then(response => {
      return res.status(201).json({
        message: `Company created successfully with id: ${response.id}`,
        company: response
      })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const editById = (req, res) => {
  const companyId = req.params.id;
  const data = req.body;

  const { id, ...restOfData } = data;

  if (!Object.keys(restOfData).length) {
    return res.status(400).json({ message: 'Missing data' });
  }

  Companies.updateCompany(companyId, restOfData)
    .then(response => {
      if (response[0])
        return res.status(200).json({ message: `Company with id: ${companyId} edited successfully` })
      else
        return res.status(404).json({ message: `Company with id: ${companyId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const removeCompany = (req, res) => {
  const companyId = req.params.id;

  Companies.deleteCompany(companyId)
    .then(response => {
      if (response)
        return res.status(204).json();
      else
        return res.status(404).json({ message: `Company with id: ${companyId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}


module.exports = {
  getAll,
  getById,
  post,
  editById,
  removeCompany
}