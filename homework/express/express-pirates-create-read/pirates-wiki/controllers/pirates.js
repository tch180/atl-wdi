
//requirements
const express = require("express");
const router = express.Router();
const data = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function (req, res){
    res.render('pirates/index', {
        pirates : data
    });
});


router.get('/new', function (req, res){
    res.render("/pirates/new");
});

router.post('/', function (req, res){
    const newpirate = req.body;
    data.push(newpirate);
    res.redirect('/pirates');


});

router.get('/:id', function (req, res){
    const id = req.params.id;
    const pirates = data[id]
    if(!pirates){
        res.render('pirates/show', {
            error: "NOPE TURN BACK NOW"
        })
    }else{
        res.render('pirates/show',{
            pirates : pirates
        })
    }
    });
   




//exports
module.exports = router;