
const express = require('express');
const app = express()


// Your code goes here

const Subscriber=require('./models/subscribers');


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
        res.send(ele);
        return;
    })
})






















module.exports = app;
