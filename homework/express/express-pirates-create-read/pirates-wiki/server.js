

const express = require('express');
const app = express();


const piratesController = require('./controllers/pirates');
/* const bodyParser = require('body-parser'); */


app.set('view engine', 'hbs');
app.set('views','./views');


/* app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); */


app.use(express.static(__dirname + '/public'));
app.use('/pirates', piratesController);


app.listen(port, () => {
    console.log('app is running on port ' + port);
});









/********SERVER****************/

var port = process.env.PORT || 1338;
//start server
app.listen(port, function() {
    console.info('SERVER IS UP ----- READY TO ROLL BOSS', port,"//", new Date());
})