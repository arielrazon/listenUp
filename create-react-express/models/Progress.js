const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgressSchema = new Schema({
    Module1: {
        type: Number,
        min: [1],
        max: [3],
    },
    Module2: {
        type: Number,
        min: [1],
        max: [3],
    },
    Module3: {
        type: Number,
        min: [1],
        max: [3],
    }
});
const Progress = mongoose.Model("Progress", ProgressSchema);
module.exports = Progress