const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    rentMortgage: {type:Double, required=true},
    insurance: {type:Double, required:true},
    payroll: {type:Double, required:true},
    advertising: {type:Double, required:true},
    utilities: {type:Double, required:true}
});

const Expenses = mongoose.model("Expenses", expenseSchema);

module.exports = Expenses;