const seq = require('../helper/dbCon');
const Sequelize = require('sequelize');


const User = seq.define('users', {
  fullname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;