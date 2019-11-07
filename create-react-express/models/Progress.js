const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgressSchema = new Schema({
    Module1: {
        type: Number,
    },
    Module2: {
        type: Number,
    },
    Module3: {
        type: Number
    },
    Completed: {
        type: Number,
        min: [1],
        max: [3],
    }
});
const Progress = mongoose.Model("Progress", ProgressSchema);
module.exports = Progress