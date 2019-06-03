const db = require("../models/");

module.exports = {

    create: function(req, res) {
    db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },


    update: function(req, res) {
        db.User.update(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    get: function(req, res) {
        db.User.findOne(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
    
}