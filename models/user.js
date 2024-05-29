'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction)
      User.hasOne(models.Cart)
    }
  }
  User.init({
    name: {type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: "Name is required"
        },
        notNull: {
          msg: "Name is required"
        }
      }
    },
    email: {type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already been registered"
      },
      validate:{
        notEmpty: {
          msg: "Email is requires"
        },
        notNull: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Invalid format email"
        }
      }

    },
    password: {type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: "Password is requires"
        },
        notNull: {
          msg: "Password is required"
        }
      }
    },
    address: {type: DataTypes.STRING,

    },
    phoneNumber: {type: DataTypes.STRING,

    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instance) => {
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return User;
};