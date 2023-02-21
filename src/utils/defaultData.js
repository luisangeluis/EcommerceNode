//Models
const Product = require('../models/product.model');
const Category = require('../models/category.model');

const generateData = async () => {
  await Category.bulkCreate([
    { id: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', name: 'tecnology',status:'active' },
    { id: 'a6ad6dbb-1441-4a15-9b20-9717cd081ec5', name: 'sports',status:'active' },
    { id: 'be5093b4-3c1a-4288-bc72-ca4f6411ffd8', name: 'hogar',status:'active' }
  ], { validate: true })

  await Product.bulkCreate([
    {
      id: '94ba3d55-2801-4596-8e02-6e45d150964e', 
      name: 'iphone', 
      description: 'iphone 14',
      categoryId: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', 
      price: 1000
    },
    {
      id: 'dade542d-7c6e-443a-b952-8f0249445772', 
      name: 'soccer ball', 
      description: 'professional soccer ball',
      categoryId: 'a6ad6dbb-1441-4a15-9b20-9717cd081ec5', 
      price: 20
    },
    {
      id: '4a3da81c-2e60-4515-b610-2b8137bfa139',
      name: 'fridge', 
      description: 'fridge of 14 ft',
      categoryId: 'be5093b4-3c1a-4288-bc72-ca4f6411ffd8',
      price: 300
    },
    {
      id: '30cfb96b-2bd3-49a3-8ea6-c735bcb1c0c0', 
      name: 'camera', 
      description: '60 megapixel camera',
      categoryId: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b',
      price: 200, 
      status: 'deleted'
    }
  ], { validate: true })
}

module.exports = generateData;


