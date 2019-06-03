const db = require("../models/");

module.exports = {
    create: (req, res) => {
        db.Expenses.create(req.body)
                    .then(dbExpense => res.json(dbExpense))
                    .catch(err => res.status(422).json(err));
    },
    read: (req, res) => {
        db.Expenses.find({})
                   .then(dbExpense => res.json(dbExpense))
                   .catch(err=> res.status(422).json(err));
    }
}