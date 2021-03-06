const uuid = require('uuid'); // ES5
var Sequelize = require('sequelize');
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Email = sequelize.define("Email", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    email: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue:true
    }
  })
  return Email;
};
