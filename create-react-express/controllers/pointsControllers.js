const db = require("../models");

module.exports = {
    addPoints: (req,res) => {
        const id = req.body.id
        const points = req.body.points
        db.Points.updateOne({
            _id = ObjectId(id)
        },{$set:{Points: Points + points}})
    }
}