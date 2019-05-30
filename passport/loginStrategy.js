import React, { Component } from "react";
import Form from "../components/SignUpForm";
// import API from "../utils/API";
import axios from "axios";

function(username, password, done) {
    username.findOne({ username: username }, (err, user) => {
        if (err) {
            return done(err)
        }
        if (!user) {
            return done(null, false, { message: "Incorrect Username" })
        }
        if (!user.checkPassword(password)) {
            return done(null, false, { message: "Incorrect Password" })
        }
        return done(null, user)
    })
}
