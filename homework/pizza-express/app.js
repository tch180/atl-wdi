const express = require('express'); // Express Package
const app = express();                // express module
const hbs = require('hbs');
const port = 3005;
app.set("view engine", "hbs");
app.set('views', '/.views');

app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("===========================")
});
app.get('/' , function(res, res) {
    res.send('Welcome to Pizza Express!');
});
app.get('/:type', function (req, res, next){
    res.render('toppings.hbs',{
        message: req.params.type + ("Pizza! Great Choice!!!!")
    })
    res.send(toppings + ' Pizza! Good choice.!')
});
app.get('/order/:amount/:size', function(req,res,next){
    var q = 10 // Q = quantity 
    var s = 'medium' // S = size 
    res.render('Your order for ' + q  + s +' Pizza will be ready in 1 minute!')
});
app.listen(3000)