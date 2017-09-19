const express = require('express');
const hbs = require('hbs')
const app = express();


app.get('/', (req, res) => {
    res.send('')
});

app.get('/math/:operator', (req, res) =>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if(req.params.operator === "add"){
        res.send(`${num1 + num2}`)
      } else if (req.params.operator === "subtract"){
        res.send(`${num1 - num2}`)
      } else if (req.params.operator === "divide"){
        res.send(`${num1 / num2}`)
      } else if (req.params.operator === "multiply"){
        res.send(`${num1 * num2}`)
      } else {
        res.send("invalid")
      }
      res.render('math/:operator');

      
    });

app.get('/greeting/:name', (req, res) => {

})

    const PORT = 3000;
app.listen(PORT, () => {
    console.log('I am listening', PORT);
})
