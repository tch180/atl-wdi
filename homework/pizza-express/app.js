var express = require('express'); // Express Package
var app = express();                // express module
var port = 3005;

app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("===========================")
});
app.get('/' , function(res, res) {
    res.send('Welcom to Pizza Express!');
});
app.get('/topping/:type', function (req, res, next){
    var topping = 'Pepperoni';
    res.send(topping + ' Pizza! Good choice.!')
});
app.get('/order/:amount/:size', function(req,res,next){
    var q = 10 // Q = quantity 
    var s = 'medium' // S = size 
    res.send('Your order for ' + q  + s +' Pizza will be ready in 1 minute!')
});
app.listen(3000)