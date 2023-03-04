//Dependencies
const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const initModels = require('./models/init.models');
//Utils
const defaultData = require('./utils/defaultData');
const apiLimiter = require('./utils/limiter')
const uploader = require('./utils/uploadFIles');
const {uploadToCloudinary} = require('./utils/cloudinary');

//initial settings
const app = express();
app.use(express.json());
app.use(cors());
app.use(apiLimiter);
// app.use(uploader)

initModels();

//Initializing db
db.authenticate()
  .then(res => {
    console.log(res)
    console.log('autenticado');
    // initModels();
  })
  .catch(error => console.log(error))

if (process.env.NODE_ENV === 'production') {
  db.sync()
    .then(() => {
      console.log('database in production');
      defaultData();
    })
    .catch(error => console.log(error))
} else {
  db.sync({ force: true })
    // db.sync()
    .then(() => {
      console.log('database en development');
      defaultData();
    })
    .catch(error => console.log(error))
}

//Routes
const productsRouter = require('./routes/products.routes').router;
const categoriesRouter = require('./routes/categories.routes').router;

app.get('/ruta', (req, res) => res.status(200).json({ message: 'hola' }));
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoriesRouter);

app.post('/upload-image',uploader,async (req,res)=>{
  const body = req.body;

  if(req.files?.image){
    console.log(req.files);
    const result = await uploadToCloudinary(req.files.image.tempFilePath)
    console.log(result);
    
  }

  res.status(200).json({message:'image'});
})

module.exports = {
  app
}