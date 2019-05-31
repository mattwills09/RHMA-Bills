const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");


passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, { _id: user._id });
})

passport.deserializeUser((id, done) => {
    console.log("Deserialized User called..");
    User.findOne(
        { _id: id },
        "username",
        (err, user) => {
            console.log(user);
            done(null, user)
        }
    )
})

passport.use(LocalStrategy);

module.exports = passport;