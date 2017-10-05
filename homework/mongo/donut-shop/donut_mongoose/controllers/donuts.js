//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express')
const router = express.Router();
const Schema = require("../models/donuts.js");


const mongoose = require('mongoose');

const donutModel = Schema.donutModel;
//======================
// INDEX
//====================== YES WORKING!!!!
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response)=> {

    donutModel.find({})
    .then((donuts)=>{
        response.render('donuts/index', {
            donuts: donuts
        })
    })
    .catch((error)=>{
        console.log(error)
    })
   
})


//======================
// NEW
//====================== YES WORKING !!!!
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) =>{
    response.render('donuts/new')
    console.log('hello new')
})


//======================
// SHOW
//====================== YES WORKING !!!!!
// Create a GET show route "/:id" that renders the donut's show page

router.get('/:id', (req, res) => {
    const donutsId = req.params.id 
    donutModel.findById(donutsId)
    .then((donuts) => {
        res.render('donuts/show', {
            donuts
        })
        .catch((error) => {
            console.log(error)
        })
    })
})




//======================
// CREATE
//======================  ******** 
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response)=>{
    const newDonut = request.body
    donutModel.create(newDonut)
    .then(()=>{
        response.redirect('/donuts')
    })
    .catch((error)=>{
        console.log(error)
    })
 
})


//======================
// EDIT
//====================== YES WORKING !!!!
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response)=> {
    const donutId =request.params.id
    donutModel.findById(donutId)
    .then((donuts)=>{
        response.render('donuts/edit', {
            
        })
       donuts: donuts 
    })
    .catch((error)=>{
        console.log(error)
    })
        
        
})


//======================
// UPDATE
//====================== ******
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {
    const donutUpdate = request.body
    const donutIdToUpdate =request.params.id
    
    donutModel.findByIdAndUpdate(donutIdToUpdate, donutUpdate, {new : true})
    .then(()=>{
        response.redirect(`/donuts/${donutIdToUpdate}`)
    })
    .catch((error)=>{
        console.log(error)
    })
   
})



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id', (request, response)=>{
    const donutId = request.params.id 
    donutModel.findByIdAndRemove(donutId)
    .then((donut)=>{
        response.redirect('/')
    })
    .catch((error)=>{
        console.log((error))
    })
})


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router