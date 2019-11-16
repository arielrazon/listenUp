const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PointsSchema = new Schema({
    Points: {
        type: Number,
        default: 0
    }
});
const Points = mongoose.model("Points", PointsSchema);
module.exports = Points