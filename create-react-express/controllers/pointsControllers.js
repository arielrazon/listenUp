const db = require("../models");

module.exports = {
    addPoints: (req, res) => {
        const _id = req.body._id
        const points = req.body.points
        db.Points.updateOne({

        }, { $set: { Points: Points + points } }).then(data => {
        
            res.sendStatus(200)
            return db.User.findOneandUpdateOne({
                _id: ObjectId(_id)
            }, { $push: { Points: data._id } })
            
        }, error => {
            console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    }
}