//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express')
const router = express.Router();
const Schema = require("../models/donuts.js");
//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response)=> {
    response.render('donuts/index')
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) =>{
    response.render('donuts/new')
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response)=>{
    response.render('donuts/show')
})



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response)=>{
    response.redirect('/donuts')
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response)=> {
    response.render('/edit'),{
        
}


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {
    response.redirect('donuts/show')
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.delete('/:id', (request, response)=>{
    response.redirect('/donuts')
})
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;