//Dependencies
const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const initModels = require('./models/init.models');
//Utils
const defaultData = require('./utils/defaultData');

//initial settings
const app = express();
app.use(express.json());
app.use(cors());
initModels();

//Initializing db
db.authenticate()
  .then(res => console.log(res))
  .catch(error => console.log(error))

if (process.env.NODE_ENV === 'production') {
  db.sync()
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
} else {
  db.sync({ force: true })
    .then(() => {
      console.log('database synced');
      defaultData();
    })
    .catch(error => console.log(error))
}

//Routes
const companiesRouter = require('./routes/companies.routes').router;
const companyTypesRouter = require('./routes/companyTypes.routes').router;

app.use('/api/v1/companies', companiesRouter);
app.use('/api/v1/companyTypes', companyTypesRouter);
app.get('/ruta', (req, res) => res.status(200).json({ message: 'hola' }));

module.exports = {
  app
}