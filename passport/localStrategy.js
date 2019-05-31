const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models/");

passport.use(new LocalStrategy (
    {
        usernameField: "username"
    },
    function(username, password, done) {
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser) {
            if (!dbUser) {
                return done(null, false, {
                    message: "No Username Match Found, Please Sign Up!"
                });
            } else if (!dbUser.checkPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect Password!"
                    });
                }
                return done (null, dbUser);
        });
    }
));

module.export = passport;
