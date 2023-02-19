const categories = require('../controllers/categories.controllers');

const getAll = (req, res) => {
  categories.readAllCategories()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const getById = (req, res) => {
  const id = req.params.id

  categories.readCategoryById(id)
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

    categories.createCategory(data)
    .then(response => res.status(201).json({
      message: `Category created successfully with id: ${response.id}`,
      companyType: response
    }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const editById = (req, res) => {
  const categoryId = req.params.id;
  const data = req.body;

  console.log(categoryId);
  console.log(data);

  if (!Object.keys(data).length)
    return res.status(400).json({ message: 'Missing data' });

    categories.updateCategory(categoryId, data)
    .then(response => {
      if (response[0])
        return res.status(200).json({ message: `Category type with id: ${categoryId} edited successfully` })
      else
        return res.status(404).json({ message: `Category type with id: ${categoryId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const removeCategory = (req, res) => {
  const categoryId = req.params.id;

  categories.deleteCategory(categoryId)
    .then(response => {
      if (response)
        return res.status(204).json();
      else
        return res.status(404).json({ message: `Category type with id: ${categoryId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

module.exports={
  getAll,
  getById,
  post,
  editById,
  removeCategory
}