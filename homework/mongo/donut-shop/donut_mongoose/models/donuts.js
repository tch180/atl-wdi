 //requirements: require mongoose
const mongoose = require('mongoose')

//create your donut schema:
const Schema = mongoose.Schema

const donutSchema = new Schema(
    {
           name: String,
           description: String,
           img: String,
           price: Number,
           qty: Number
       })
 const donutModel = mongoose.model('donut', donutSchema);
//export your donut with module.exports()

module.exports = donutModel



