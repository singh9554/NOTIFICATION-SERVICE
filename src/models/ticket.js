'use strict';
const {
  Model
} = require('sequelize');

const {Enum} = require('../utils/common');
const {Pending,Success,Failed} = Enum.Status;
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject:{
type: DataTypes.STRING,
      allowNull: false,
    },
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    recepientEmail:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    status:{
      type: DataTypes.ENUM,
      values: [Pending,Success,Failed],
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};