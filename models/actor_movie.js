const seq = require('../helper/dbCon');
const Sequelize = require('sequelize');


const Actor_Movie = seq.define('actors_movies', {
    actor_id: {
      type: Sequelize.INTEGER
    },
    movie_id: {
      type: Sequelize.INTEGER
    },
    isStar: {
      type: Sequelize.BOOLEAN
    }
  });

module.exports = Actor_Movie