const db = require('../models');

module.exports = {
    create: (req, res) => {
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }).then(data => {
            res.sendStatus(200)
        }, error => {
            console.log(error);
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    getAccount: (req, res) => {
        db.User.find({
            username: req.body.username,
            password: req.body.password,
        }).populate("Lesson", "Progress", "Points")
            .then( data => {
                
                 if (!data) {
                    res.sendStatus(404)
                } else {
                    res.sendStatus(200)
                    res.json(data)
                }
            },error =>{
                console.log(error)
                res.sendStatus(500)
            }).catch(err => res.status(422).json(err))
    }
}