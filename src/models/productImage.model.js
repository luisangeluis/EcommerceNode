const { DataTypes } = require('sequelize');
const { db } = require('../db/database');

const productImage = db.define('product_image', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isURL: [{
        require_tld: false
      }]
    }
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'product_id'
  }
})

module.exports = productImage;