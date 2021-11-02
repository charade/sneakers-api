'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Brands.init({
    id : {
      allowNull : false,
      primaryKey : true,
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    brandsName: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'brands',
  });
  return Brands;
};