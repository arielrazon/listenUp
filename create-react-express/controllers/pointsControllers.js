const db = require("../models");

module.exports = {
    addPoints: (req,res) => {
        const _id = req.body._id
        const points = req.body.points
        db.Points.updateOne({
            
        },{$set:{Points: Points + points}}).then((err,data)=>{
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
                return db.User.findOneandUpdateOne({
                    _id: ObjectId(_id)
                },{$push:{Points:data._id}})
            }
        }).catch(err => res.status(422).json(err))
    }
}