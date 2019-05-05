const seq = require('../helper/dbCon');
const Sequelize = require('sequelize');


const Movie = seq.define('movies', {
  title: {
    type: Sequelize.STRING
  },
  release_date: {
    type: Sequelize.DATE
  },
  genre: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  media: {
    type: Sequelize.STRING
  },

});

module.exports = Movie;