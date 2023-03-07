const Products = require('../../models/product.model');

const productExist = (req, res, next) => {
  const productId = req.params.id;

  Products.findOne({ where: { id: productId },attributes:['id'] })
    .then(response => {
      // console.log(response);
      if (response)
        next();
      else 
      return res.status(404).json({ message: `Product with id: ${productId} doesn't exist` });

    })
    .catch(error => res.status(400).json({ message: error.message }));
}

module.exports = {
  productExist
}