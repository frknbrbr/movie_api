const seq = require('../helper/dbCon');
const Sequelize = require('sequelize');


const Actor = seq.define('actors', {
  full_name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  }
});

module.exports = Actor;