const User = require("../models/user");
const _ = require("lodash");
const jwt = require("jwt-simple");
require("dotenv").config();

const getTokenForUser = user => {
    const timeStamp = new Date().getTime();
    return jwt.encode(
        {
            sub: user.id,
            iat: timeStamp
        },
        process.env.secret
    );
};

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({ error: "Email utilisé" });
        }
        if (_.isEmpty(email) || _.isEmpty(password)) {
            return res
                .status(422)
                .send({ error: "Email ou mot de passe vide" });
        } else {
            const user = new User({
                email,
                password
            });
            user.save(err => {
                if (err) {
                    return next(err);
                }
                res.json({ token: getTokenForUser(user) });
            });
        }
    });
};
