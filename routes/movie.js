const express = require('express');
const router = express.Router();


//controllers
const movieControllers = require('../controllers/movieOperations');

router.get('/', (req, res) => {
    const promise = movieControllers.listAllMovies();
    promise.then((movie) => {
        if (movie) {
            res.json({
                movie,
                status: true
            });
        } else {
            res.json({
                status: false,
                message: "There is no movie registered yet"
            })
        }
    }).catch(err => {
        res.json(err);
    })

})

router.get('/:movie_id', (req, res) => {
    const movie_id = req.params.movie_id;
    const promise = movieControllers.findMovieById(movie_id);
    promise.then((movie) => {
        if (movie) {
            res.json({
                movie,
                status: true
            });
        } else {
            res.json({
                status: false,
                message: "There is no movie with this title"
            })
        }
    }).catch(err => {
        res.json(err);
    })
});

router.get('/title/:title', (req, res) => {
    const title = req.params.title;
    const promise = movieControllers.findMovieByTitle(title);
    promise.then((movie) => {
        if (movie) {
            res.json({
                movie,
                status: true
            });
        } else {
            res.json({
                status: false,
                message: "There is no movie with this title"
            })
        }

    }).catch(err => {
        res.json(err);
    })
});

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const promise = movieControllers.findMovieByGenre(genre);
    promise.then((movie) => {
        if (movie) {
            res.json({
                movie,
                status: true
            });
        } else {
            res.json({
                status: false,
                message: "There is no movie with this genre"
            })
        }

    }).catch(err => {
        res.json(err);
    })
});

router.post('/', (req, res) => {
    const {
        title,
        release_date,
        genre,
        description,
        media
    } = req.body;

    const promise = movieControllers.addMovie(title, release_date, genre, description, media);
    promise.then((movie) => {
        res.json(movie);
    }).catch(err => {
        res.json(err);
    })
})

router.delete('/:movie_id', (req, res) => {
    const movie_id = req.params.movie_id;
    const promise = movieControllers.deleteMovie(movie_id);
    promise.then((movie) => {
        res.json({
            movie,
            status: true
        });
    }).catch(err => {
        res.json({
            err,
            status: false
        });
    })
})

module.exports = router;