const express=require('express');
const route=express.Router();

const contact=require('../models/contact');

// getting contacts
route.get("/contacts",(req,res,next)=>{
    contact.find().then((contacts)=>{
        res.json(contacts);
    })
})

// create 
route.post("/contacts",(req,res,next)=>{
    if(!req.body.first_name){
        res.status(400).json({msg:'failed to add as first name field is missing'})
    }
    if(!req.body.last_name){
        res.status(400).json({msg:'failed to add as last name field is missing'})
    }
    if(!req.body.phone){
        res.status(400).json({msg:'failed to add as phone field is missing'})
    }
   let newcon=new contact({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    phone:req.body.phone
   });
   newcon.save().then(()=>{
    
        res.json({msg:'added successfully'})
   
   }).catch((err)=>{
    res.json({msg:'failed to add'})
   })
// let output;
// (async () => {
//    output = await newcon.save();
//    console.log(output);
// })

})

// delete
route.delete("/contacts/:id",(req,res,next)=>{
    contact.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    })
})

// update
route.put("/contacts",(req,res,next)=>{
    
})

module.exports=route