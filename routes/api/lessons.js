const router = require("express").Router();
const db = require("../../models");
router.post("/create", (req, res) => {
    let userId;

    let result;

    db.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,

    }).then((data) => {

        userId = data._id;


        result=data;



        db.Progress.create({

        }).then(progress => {

            db.User.findOneAndUpdate({ _id: userId }, { 
                $push: 
                    { progress: progress._id } 
                
            },{ new: true }).then(data => {
                
                error => console.log(error)
            });

        })



        db.Points.create({

        }).then(points => {

           

            db.User.findOneAndUpdate({ _id: userId }, { 
                $push: { 
                    points: points._id 
                } 
            },{ new: true }).then(data => {
               
                error => console.log(error)
            });

        })







    },{ new: true }).then(data => {
        res.json(result._id)
    }, error => {
        console.log(error);
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})



router.get("/login", (req, res) => {
    db.User.find({
        _id: req.body._id,
        username: req.body.username,
        password: req.body.password
    }).populate(
        'progress'
    )
    .populate(
        'points'
    )
        .then(data => {

            if (!data) {
                res.sendStatus(404)
            } else {
                res.json(data)
            }
        }, error => {
            console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
})
router.post("/addPoints", (req, res) => {
    const _id = req.body._id
    const points = req.body.points
    db.Points.updateOne({

    }, { $set: { Points: Points + points } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({
            _id: _id
        }, { $push: { points: data._id } })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.get("/findAll", (req, res) => {
    db.Lesson.find({}).then(data => {
        if (!data) {
            res.sendStatus(404)
        } else {
            res.json(data);
        }
    }, error => {
        console.log(error);
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.get("/findModule", (req, res) => {
    db.Lesson.find({
        moduleName: req.body.name,
    }).then(data => {
        if (!data) {
            res.sendStatus(404)
        } else {
            res.json(data)
        }
    }, error => {
        console.log(error);
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.get("/findCategory", (req, res) => {
    db.Lesson.find({
        moduleName: req.body.name,
        category: req.body.category,
    }).then(data => {
        if (!data) {
            res.sendStatus(404)
        } else {
            res.json(data)
        }
    }, error => {
        console.log(error);
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.post("/updateMod1", (req, res) => {
    db.Progress.updateOne({

    }, { $set: { Module1: req.body.percentage } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { progress: data._id } })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.post("/updateMod2", (req, res) => {
    db.Progress.updateOne({

    }, { $set: { Module2: req.body.percentage } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { progress: data._id } })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))

})
router.post("/updateMod3", (req, res) => {
    db.Progress.updateOne({

    }, { $set: { Module3: req.body.percentage } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { progress: data._id }  })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})

module.exports = router