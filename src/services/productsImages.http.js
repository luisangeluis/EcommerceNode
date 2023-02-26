const ProductsImages = require('../controllers/productsImages.controllers');

const postImage = (req, res) => {
  const file = req.file;
  const productId = req.params.id;
  const data = req.body;
  

  //TODO comprobar si el archivo existe
  console.log(file);

  ProductsImages.createProductImage(productId,file)
    .then(response => console.log(response))
    .catch(error => console.log(error));

}

module.exports = {
  postImage
}