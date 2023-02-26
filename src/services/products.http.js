const ProductControllers = require('../controllers/products.controllers');

const getAll = (req, res) => {
  ProductControllers.readAllProducts()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const getById = (req, res) => {
  const id = req.params.id;

  ProductControllers.readProductById(id)
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

  if (!data.name || !data.description || !data.categoryId || !data.price) 
    return res.status(400).json({
      message: 'At least these fields must be entered',
      fields: {
        name: 'Type a name',
        description: 'Type a description',
        categoryId: 'Type a category Id',
        price:'Type a price'
      }
    })

  ProductControllers.createProduct(data)
    .then(response => {
      return res.status(201).json({
        message: `Product created successfully with id: ${response.id}`,
        product: response
      })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const editById = (req, res) => {
  const productId = req.params.id;
  const data = req.body;

  const { id, ...restOfData } = data;

  if (!Object.keys(restOfData).length) {
    return res.status(400).json({ message: 'Missing data' });
  }

  ProductControllers.updateProduct(productId, restOfData)
    .then(response => {
      if (response[0])
        return res.status(200).json({ message: `Product with id: ${productId} edited successfully` })
      else
        return res.status(404).json({ message: `Product with id: ${productId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const removeProduct = (req, res) => {
  const productId = req.params.id;

  ProductControllers.deleteProduct(productId)
    .then(response => {
      if (response)
        return res.status(204).json();
      else
        return res.status(404).json({ message: `Product with id: ${productId} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

// const postImage=(req,res)=>{
  
// }

module.exports = {
  getAll,
  getById,
  post,
  editById,
  removeProduct
}