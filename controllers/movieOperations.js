const Movie = require('../models/movie');

module.exports = {

    listAllMovies: () => {
        return Movie.findAll();
    },

    findMovieById: (movie_id) => {
        if (movie_id) {
            return Movie.findByPk(movie_id);
        } else {
            return {
                status: false,
                message: "Please give an id"
            }
        }
    },

    findMoviesByIds: (ids) => {
        if (ids) {
            return Movie.findAll({
                where: {
                    id: ids
                }
            });
        } else {
            return {
                status: false,
                message: "Please give ids"
            }
        }


    },
    findMoviesByTitle: (movie_title) => {
        if (movie_title) {
            return Movie.findAll({
                where: {
                    title: movie_title
                }
            });
        } else {
            return {
                status: false,
                message: "Please give a movie title"
            }
        }


    },
    findMoviesByGenre: (movie_genre) => {
        if (movie_genre) {
            return Movie.findAll({
                where: {
                    genre: movie_genre
                }
            });
        } else {
            return {
                status: false,
                message: "Please give a movie genre"
            }
        }

    },
    addMovie: (title, release_date, genre, description, media) => {
        if (title && release_date && genre) {
            return Movie.sync().then(() => {
                return Movie.create({
                    title: title,
                    release_date: release_date,
                    genre: genre,
                    description: description,
                    media: media
                });
            });
        } else {
            return {
                status: false,
                message: "give the necessary fields"
            }
        }

    },
    deleteMovie: (movie_id) => {
        if (movie_id) {
            return Movie.destroy({
                where: {
                    id: movie_id
                }
            })
        } else {
            return {
                status: false,
                message: "give the movie id "
            }
        }

    }
}