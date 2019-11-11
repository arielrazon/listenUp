const db = require("../models");

module.exports = {
    addPoints: (req,res) => {
        const id = req.params.id
        const points = req.params.points
        db.Points.updateOne({
            _id = ObjectId(id)
        },{$set:{Points: Points + points}})
    }
}