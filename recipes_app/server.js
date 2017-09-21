var hbs =require('hbs');
var express =require('express');
var port = process.env.port || 3000;
var app = express();

app.listen(port, function () {
    console.info('Server Up -- Ready to serve', port,"//", new Date());
}),
app.get('/', function(req, res){
    res.send('This is My COOKBOOK')
})

app.get('/', function(req, res) {
    res.render('recipes/index');
    recipes: date.recipes
});


