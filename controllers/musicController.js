const express = require('express');
const router = express.Router();
const Music = require('../models/music.js');

// router

router.put('/:id', (req, res) => {
  Music.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateMusic) => {
    res.send(updateMusic);
  });
});

router.post('/', (req, res) => {
  Music.create(req.body, (err, createdMusic) => {
    res.send(createdMusic);
  });
});

router.get('/', (req, res) => {
  Music.find((err, foundMusic) => {
    res.send(foundMusic);
  });
});

router.delete('/:id', (req, res) => {
  Music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
    res.send(deletedMusic);
  });
});

module.exports = router;
