const db = require('../models')

module.exports = {
    // Get everything from the lesson database
    findAll: (req, res) => {
        db.Lesson.find().then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data);
                res.sendStatus(200);
                console.log(data)
            }
        }).catch(err => res.status(422).json(err))
    },
    // Get certain Module from database
    findModule: (req, res) => {
        db.Lesson.find({
            moduleName: req.body.name,
        }).then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else if (!data) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
    // Get certain category info from specific module 
    findCategory: (req, res) => {
        db.Lesson.find({
            moduleName: req.body.name,
            category: req.body.category,
        }).then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data)
            }
         }).catch(err => res.status(422).json(err))
    }
}
