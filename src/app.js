//Dependencies
const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const initModels = require('./models/init.models');

//initial settings
const app = express();
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
      // defaultData();
    })
    .catch(error => console.log(error))
} else {
  db.sync({ force: true })
    // db.sync()
    .then(() => {
      console.log('database synced');
      // defaultData();
    })
    .catch(error => console.log(error))
}

//Routes
const companiesRouter = require('./routes/companies.routes').router;

app.use('/api/v1/companies', companiesRouter);
app.get('/ruta', (req, res) => res.status(200).json({ message: 'hola' }));

module.exports = {
  app
}