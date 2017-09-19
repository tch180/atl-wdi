const express =require('express')
const app = express();
const hbs = require('hbs');




app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/Shows', function(req, res) {
    const Shows = ['Green Arrow', 'Quantico', 'star trek', 'orville']
res.render('shows', {
    Shows: Shows
});
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log('I am listening' + PORT);
})