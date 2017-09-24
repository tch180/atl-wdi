const express = require('express');
const router = express.Router();
const data = require('../data.js');

/* INDEX ToDonts */
router.get('/', (req, res) => {
  console.log(data);
  res.render('todonts/index', {
    todonts: data.seededToDonts
  });
});


/* NEW ToDonts */
router.get('/new', (req, res) => {
  res.render('todonts/new');
});

/* EDIT */
router.get('/:id/edit', (req, res) => {
  res.render('todonts/edit', {
    todo: {
      id: req.params.id,
      description: data.seededToDonts[req.params.id].description,
      urgent: data.seededToDonts[req.params.id].urgent,
    }
  });
});

/* SHOW ToDonts*/
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todonts = data.seededToDonts[id];
  console.log(todonts);
  if (!todonts) {
    res.render('todonts/show', {
      error: "No to-do found with this ID"
    })
  } else {
    res.render('todonts/show', {
      todonts
    })
  }
});


///module.exports