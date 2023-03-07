const ProductsImages = require('../controllers/productsImages.controllers');
const Products = require('../controllers/products.controllers');

const postImage = async (req, res) => {
  const file = req.files;
  const productId = req.params.id;
  console.log(file);

  if(file?.image){
    ProductsImages.createProductImage(productId,file)
      .then(response=>console.log(response))
      .catch(error=>console.log(error));
  }else{
    console.log('no hay image');
  }

  

  // try {
  //   const product = await Products.readProductById(productId);

  //   if (!product) 
  //     res.status(404).json({ message: 'Product doesnt exists' })
    
  //   const productImage = await ProductsImages.createProductImage(product.id,data);
  //   return res.status(201).json({ message: 'Product image created' });
  // } catch (error) {
  //   return res.status(400).json({ message: `${error.message}` });
  // }



  //TODO comprobar si el archivo existe

  // ProductsImages.createProductImage(productId,file)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));

}

module.exports = {
  postImage
}