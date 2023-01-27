const CompanyTypes = require('../controllers/companyTypes.controller');

const getAll = (req, res) => {
  CompanyTypes.readAllCompanyTypes()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const getById = (req, res) => {
  const id = req.params.id

  CompanyTypes.readCompanyTypesById(id)
    .then(response => {
      if (response) return res.status(200).json(response)
      else return res.status(404).json(response)
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const post = (req, res) => {
  const data = req.body;

  if (!Object.keys(data).length)
    return res.status(400).json({ message: 'Missing data' });

  if (!data.name)
    return res.status(400).json({
      message: 'At least these fields must be entered',
      fields: {
        name: 'Type a string'
      }
    })

  CompanyTypes.createCompanyType(data)
    .then(response => res.status(201).json({
      message: `Company type created successfully with id: ${response.id}`,
      companyType: response
    }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const editById = (req, res) => {
  const companyTypeId = req.params.id;
  const data = req.body;

  if (!Object.keys(data).length)
    return res.status(400).json({ message: 'Missing data' });

  CompanyTypes.updateCompanyType(companyTypeId, data)
    .then(response => {
      if (response[0])
        return res.status(200).json({ message: `Company type with id: ${companyId} edited successfully` })
      else
        return res.status(404).json({ message: `Company type with id: ${companyId} doesn't exist` })
    })
    .catch(error => res.status(404).json({ message: error.message }))
}

const removeCompanyType = (req, res) => {
  const companyTypeId = req.params.id;

  CompanyTypes.deleteCompanyType(companyTypeId)
    .then(response => {
      if (response)
        return res.status(204).json();
      else
        return res.status(404).json({ message: `Company type with id: ${companyId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

module.exports={
  getAll,
  getById,
  post,
  editById,
  removeCompanyType
}