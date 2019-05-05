const jwt = require('jsonwebtoken');

const api_secret_key = "top secret key";


module.exports = (req, res, next) => {
    const token =
        req.headers['x-access-token'] || req.body.token || req.query.token;
    if (token) {
        jwt.verify(token, api_secret_key, (error, decoded) => {
            if (error) {
                res.json({
                    status: false,
                    message: "False token"
                })
            } else {
                req.decode = decoded;
                next();
            }
        });
    } else {
        res.json({
            status: false,
            message: "Token has not been given"
        });
    }
};