const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number]
  }
});

// @todo index
// @view

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
