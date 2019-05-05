const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userOperations');


router.post('/register', (req, res) => {
    const {
        fullname,
        email,
        password
    } = req.body;

    const promise = userControllers.registerUser(fullname, email, password);
    promise.then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    })
})

router.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;

    const promise = userControllers.loginUser(email, password);
    promise.then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    })
})
module.exports = router;