const router = require("express").Router();
const db = require("../../models");

router.post("/create", (req, res) => {
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
})
router.get("/login", (req, res) => {
    db.User.find({
        _id: "5dd490cf077e9838aa2f0569"
        // username: req.body.username,
        // password: req.body.password,
    }).populate("Lesson","Progress","Points")
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
router.put("/addPoints", (req, res) => {
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
router.put("/updateMod1", (req,res)=>{
    db.Progress.updateOne({
            
    },{$set:{Module1: req.body.percentage}}).then(data=>{
          
              res.sendStatus(200)
              return db.User.findOneandUpdateOne({_id: req.body._id},{$push:{Progress: data._id}},{new: true})

    },error =>{
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})
router.put("/updateMod2", (req,res)=> {
    db.Progress.updateOne({
            
    },{$set:{Module2: req.body.percentage}}).then(data=>{
          
              res.sendStatus(200)
              return db.User.findOneandUpdateOne({_id: req.body._id},{$push:{Progress: data._id}},{new: true})

    },error =>{
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))

})
router.put("/updateMod3",(req,res)=>{
    db.Progress.updateOne({
            
    },{$set:{Module3: 0.10}}).then(data=>{
          
              res.sendStatus(200)
              return db.User.findOneandUpdateOne({_id: req.body._id},{$push:{Progress: data._id}},{new: true})

    },error =>{
        console.log(error)
        res.sendStatus(500)
    }).catch(err => res.status(422).json(err))
})

module.exports = router