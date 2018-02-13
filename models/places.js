const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
});

placeSchema.index({ name: 1, type: -1 });
// @view

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
