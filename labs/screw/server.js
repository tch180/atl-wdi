/* Packages */

const express = require('express');
const hbs = require('hbs');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const todontsController = require('./controller/todonts.js');
const methodOverride = require('method-override');

app.use('todonts', todontsController);


/* body parser */
app.use(bodyParser.urlencoded({
    extended: true
}));


/*Views*/
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Welcome HOME');
});

app.use(methodOverride('_method'))
// Start server
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.info('-----------------------------SERVER UP----------------READY TO ROCK AND ROLL BOSS!!', port, "//", new Date());
});