//===========================
// REQUIREMENTS
//===========================
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const hbs = require('hbs');
const methodOverride = require('method-override') 


//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');

//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
const port = process.env.PORT || 9000;
app.listen(port, function () {
    console.info(new Date(),'------SERVER UP----------------READY TO ROCK AND ROLL BOSS!!', port,  new Date());
});
