const db = require('../models');

module.exports = {
    create: (req, res) => {
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
        }).then((err,data)=>{
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
    getAccount: (req,res) => {
        db.User.find({
           username: req.body.username,
           password: req.body.password,
        }).then((err,data)=>{
             if (err) {
                 res.sendStatus(500)
             } else if (!data) {
                 res.sendStatus(404)
             } else {
                 res.sendStatus(200)
                 res.json(200)
             }
        }).catch(err => res.status(422).json(err))
    }
}