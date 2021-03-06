const passport = require("passport");
const User = require("../models/user");
require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    const userId = payload.sub;
    User.findById(userId, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
});

passport.use(jwtLogin)
