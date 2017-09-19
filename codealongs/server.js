var express = require('express'); // Loading the express module on our server
var app = express(); // Creates a new instance of express on our server


app.get('/', function(req, res) {
    res.send("hello wdi12");
  // when a request comes in at localhost:3000, it will respond 
});

var PORT = process.env.PORT || 3005; // tells the server where to listen for requests

app.listen(PORT, function() {
  // tells the server where to listen for requests on port 3000

 console.log('hello-express is listening on port ' + PORT);
}); // actualizing the line above


app.get('/greeting', function (req, res){
    res.send("Hey, WDI 12!");
});
 
app.get('/:food', function (req, res) {
    res.send('I really love pizza')
}); 

app.get('/add', (req, res) => {
const num1 = req.query.num1;
const nume = req.query.num2;

res.send;'$(num1 + num2)';
})