const db = require('../models')

module.exports = {
    // Get everything from the lesson database
    findAll: (req, res) => {
        db.Lesson.find({}).then(data => {
            if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data);
            }
        },error=>{
            console.log(error);
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    // Get certain Module from database
    findModule: (req, res) => {
        db.Lesson.find({
            moduleName: req.body.name,
        }).then(data => {
             if (!data) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
                res.json(data)
            }
        },error=>{
            console.log(error);
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    // Get certain category info from specific module 
    findCategory: (req, res) => {
        db.Lesson.find({
            moduleName: req.body.name,
            category: req.body.category,
        }).then(data => {
             if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data)
            }
         },error =>{
            console.log(error);
            res.sendStatus(500)
         }).catch(err => res.status(422).json(err))
    }
}
