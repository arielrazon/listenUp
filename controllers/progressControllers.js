const db = require("../models")

module.exports = {
    updateMod1Two: (req,res) => {
        db.Progress.updateOne({
            
        },{$set:{Module1: 2}}).then(data=>{
              
                  res.sendStatus(200)
                  return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true})

        },error =>{
            console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    updateMod1Three: (req,res) => {
        db.Progress.updateOne({

        },{$set:{Module1: 3}}).then(data=>{
                  res.sendStatus(200);
                  return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true})
              
        },error=>{
            console.log(error)
            res.sendStatus(500);
        }).catch(err => res.status(422).json(err))
       
    },
    updateMod2Two: (req,res)=> {
        db.Progress.updateOne({
           
        },{$set:{Module2: 2}}).then(data=>{
                res.sendStatus(200)
                return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true})
        },error=>{
            console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    updateMod2Three: (req,res)=> {
        db.Progress.updateOne({
        
        },{$set:{Module2: 3}}).then(data=>{
            
                res.sendStatus(200)
                return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true});
    
        },error=>{
             console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    updateMod3Two: (req,res)=> {
        db.Progress.updateOne({
            
        },{$set:{Module3: 2}}).then((err,data)=>{
            if(err){
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
                return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true});
            }
        },error =>{
             console.log(error)
             res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
    updateMod3Three: (req,res)=> {
        db.Progress.updateOne({
            
        },{$set:{Module3: 3}}).then(data=>{
        
                res.sendStatus(200)
                return db.User.findOneandUpdateOne({_id:ObjectId(req.body._id)},{$push:{Progress: data._id}},{new: true})
            
        },error=>{
            console.log(error)
            res.sendStatus(500)
        }).catch(err => res.status(422).json(err))
    },
}