const express = require('express');
const router = express.Router();


//controllers
const actorControllers = require('../controllers/actorOperations');

router.post('/', (req, res) => {
    const {
        full_name,
        role
    } = req.body;

    const promise = actorControllers.addActor(full_name, role);
    promise.then((movie) => {
        res.json(movie);
    }).catch(err => {
        res.json(err);
    })
})

module.exports = router;