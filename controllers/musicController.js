const express = require('express');
const router = express.Router();
const Music = require('../models/music.js');

// router

router.get('/', (req, res) => {
  Music.find({}, (err, foundMusic) => {
    res.json(foundMusic);
  });
});

router.post('/', (req, res) => {
  Music.create(req.body, (err, createdMusic) => {
    res.json(createdMusic);
  });
});

router.delete('/:id', (req, res) => {
  Music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
    res.json(deletedMusic);
  });
});

router.put('/:id', (req, res) => {
  Music.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateMusic) => {
    res.json(updateMusic);
  });
});

module.exports = router;
