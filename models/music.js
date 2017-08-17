const mongoose = require('mongoose');

// model

const musicSchema = mongoose.Schema({
  Artist: String,
  Album: String,
  Year: String,
  Picture: String
})

const music = mongoose.model('Music', musicSchema);

module.exports = music;
