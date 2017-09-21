const express =require('express');
const router =express.Router();
const data = require("../data.js");
/*Index TODOS*/ 
router.get('/', function (req, res) {
  res.render('todos/index', {
      todos: data.seededTodos
  });  
})
/*Show todos*/
router.get('/:id', (req, res) => {
    const id= parseInt(req.params.id);
    const todo = data.seededTodos[id];
    if (!todo){
        res.render('todos/show', {
            error: "No to-do found with this ID"
        })
    } else {
        res.render('todos/show', {
        todo: todo
    })
    }
});

router.post('/', (req,res){)}
  module.exports = router;