const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')

const app = express()

mongoose.connect('mongodb://localhost/students');

app.set('view engine', 'hbs')

const db = mongoose.connection

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

const studentsController = require('./controller/students_controller')
app.use('/students', studentsController)




const port = 1338;
app.listen(port, () => {
    console.log(`------SERVER UP AND RUNNING BOSS  ${port}` , new Date())
})