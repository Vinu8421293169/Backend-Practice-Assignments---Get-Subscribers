const express = require('express');
const app = express()
const Subscriber=require('./models/subscribers');

// Your code goes here

app.get("/subscribers",(req,res)=>{
    Subscriber.find().then((ele)=>{
        res.send(ele);
        return;
    })
})


app.get("/subscribers/names",(req,res)=>{
    Subscriber.find().select({name:1,subscribedChannel:1}).then((ele)=>{
        res.send(ele);
        return;
    })
})


app.get("/subscribers/:id",(req,res)=>{
    const id=req.params.id;
    Subscriber.find({_id:{$eq:id}}).then((ele)=>{
            res.status(200).send(ele);
            return;
    }).catch((err)=>{
        res.status(400).send({message:err});
            return;
    });
});




module.exports = app;
