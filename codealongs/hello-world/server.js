const express = require('express');
const app = express(); 
const hbs = require('hbs');

app.set('view engine','hbs');//getting handlebars into server/engine
app.use(express.static(__dirname + '/public' ));

app.get('/greeting', function(req, res) {
    console.log(req.query);
    
   res.render('greeting', {
      saying: req.query.saying,
      name: "TORY"
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        favoriteFoods: favoriteFoods
    });
})
    
    





var PORT = process.env.PORT || 3005; // tells the server where to listen for requests

app.listen(PORT, function() {

})