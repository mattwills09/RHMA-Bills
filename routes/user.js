const router = require("express").Router();
const userController = require("../controllers/userController");


router.post(
    "login",
    function (req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body)
        next()
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)