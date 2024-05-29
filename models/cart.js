'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User)
    }
  }
  Cart.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    productImg: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};