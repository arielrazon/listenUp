const db = require("../models")

module.exports = {
    updateMod1Two: (req,res) => {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module1: 2}}).then((err,data)=>{
              if (err) {
                  res.sendStatus(500)
              } else {
                  res.sendStatus(200)
              }
        })
    },
    updateMod1Three: (req,res) => {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module1: 3}}).then((err,data)=>{
              if (err) {
                  res.sendStatus(500)
              } else {
                  res.sendStatus(200)
              }
        }).catch(err => res.status(422).json(err))
    },
    updateMod2Two: (req,res)=> {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module2: 2}}).then((err,data)=>{
            if(err){
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
    updateMod2Three: (req,res)=> {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module2: 3}}).then((err,data)=>{
            if(err){
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
    updateMod3Two: (req,res)=> {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module3: 2}}).then((err,data)=>{
            if(err){
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
    updateMod3Three: (req,res)=> {
        db.Progress.updateOne({
            _id: ObjectId(req.params.id)
        },{$set:{Module3: 3}}).then((err,data)=>{
            if(err){
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }).catch(err => res.status(422).json(err))
    },
}