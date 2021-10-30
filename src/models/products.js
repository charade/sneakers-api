'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }

  };
  Products.init({
    id : {
      primaryKey : true,
      allowNull : false,
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    brandsName : DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    gender : DataTypes.STRING(5),
  }, {
    sequelize,
    modelName: 'products',
  });
  return Products;
};