const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Lesson.find().then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data);
                res.sendStatus(200);
            }
        }).catch(err => res.status(422).json(err))
    },
    findModule: (req, res) => {
        db.Lesson.find({
            moduleName: req.params.name,
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
    findCategory: (req, res) => {
        db.Lesson.find({
            moduleName: req.params.name,
            category: req.params.category,
        }).then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data)
            }
         })
    }


}