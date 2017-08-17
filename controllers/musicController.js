const express = require('express');
const router = express.Router();
const music = require('../models/music.js');

// router

router.get('/', (req, res) => {
  music.find({}, (err, foundMusic) => {
    res.json(foundMusic);
  })
})

router.post('/', (req, res) => {
  music.create(req.body, (err, createdMusic) => {
    res.json(createdMusic);
  })
})

router.delete('/:id', (req, res) => {
  music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
    res.json(deletedMusic)
  })
})

router.put('/:id', (req, res) => {
  music.findByIdAndUpdate(req.params.id, req.body, (err, updateMusic) => {
    res.json(updateMusic)
  })
})

module.exports = router;
