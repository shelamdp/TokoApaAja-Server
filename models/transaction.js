'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User)
    }
  }
  Transaction.init({
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Shipped"
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};