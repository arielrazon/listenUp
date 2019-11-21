const router = require("express").Router();
const db = require("../../models");
router.post("/create", (req, res) => {
    let userId;

    let result;

    db.User.create({
        username: `test${Date.now()}`,
        password: "handyman",
        email: `test${Date.now()}@email.com`,

    }).then((data) => {

        userId = data._id;

        console.log('userId in user create:', userId)

        result=data;



        db.Progress.create({

        }).then(progress => {

            console.log('userId progress create:', userId)

            db.User.findOneAndUpdate({ _id: userId }, { 
                $push: 
                    { progress: progress._id } 
                
            },{ new: true }).then(data => {
                console.log(" User updated...", data), 
                error => console.log(error)
            });

        })



        db.Points.create({

        }).then(points => {

            console.log('userId points create:', userId)

            db.User.findOneAndUpdate({ _id: userId }, { 
                $push: { 
                    points: points._id 
                } 
            },{ new: true }).then(data => {
                console.log(" User updated...", data), 
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
        _id: "5dd5f72ff5b97d650f5620f1",
        // username: req.body.username,
        // password: req.body.password,
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
        }, { $push: { Points: data._id } })

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
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { Progress: data._id } }, { new: true })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.post("/updateMod2", (req, res) => {
    db.Progress.updateOne({

    }, { $set: { Module2: req.body.percentage } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { Progress: data._id } }, { new: true })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))

})
router.post("/updateMod3", (req, res) => {
    db.Progress.updateOne({

    }, { $set: { Module3: 0.10 } }).then(data => {

        res.sendStatus(200)
        return db.User.findOneandUpdateOne({ _id: req.body._id }, { $push: { lessons: { progress: data._id } } }, { new: true })

    }, error => {
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})

module.exports = router