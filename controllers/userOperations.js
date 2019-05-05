const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const api_secret_key = "top secret key"
module.exports = {



    registerUser: async (fullname, email, password) => {
        user_password = bcrypt.hashSync(password);
        const userState = await User.findOne({
            where: {
                email: email
            }
        });

        if (userState != undefined) {
            return {
                status: false,
                message: "This mail address has already registered."
            }
        } else {
            return User.create({
                fullname: fullname,
                email: email,
                password: user_password
            })
        }
    },
    loginUser: async (email, password) => {
        const userState = await User.findOne({
                where: {
                    email: email
                }
            });

        if (userState == undefined) {
            return {
                status: false,
                message: "This mail address has already registered"
            }
        } else {
            try {
                let result = await bcrypt.compare(password, userState.password);
                if (!result) {
                    return {
                        error: "Wrong password",
                        status: false,
                    }
                } else {
                    const payLoad = userState.id;
                    const token = await jwt.sign(payLoad, api_secret_key);
                    return {
                        token,
                        status: true
                    }
                }
            } catch (error) {
                return {
                    error: JSON.stringify(error),
                    status: false,
                }
            }
            

        }
    }



}