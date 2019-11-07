const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PointsSchema = new Schema({
    Points: {
        type: Number
    }
});
const Points = mongoose.Model("Points", PointsSchema);
module.exports = Points