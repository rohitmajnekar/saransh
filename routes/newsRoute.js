const express = require('express')
const router = express.Router()
const News = require('../models/newsModel')
const Favs = require('../models/favModel')


router.get('/theWire',async function(req,res){
    // News.create({paper:"yo"})
    
    News.find({paper:'theWire'})
    .then(data => {
        console.log('Wire')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
    
})

router.post('/fav',async function(req,res){
    // News.create({paper:"yo"})
    
    var res = new Favs(req.body)
    res.save()
    .then(item => {
     console.log("item saved to database");
    })
    .catch(err => {
        console.log(err)
    });
    // console.log(req.body)
    
})

router.get('/theHindu',async function(req,res){
    
    News.find({paper:'theHindu'})
    .then(data => {
        console.log('Hindu')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
    
})

module.exports = router