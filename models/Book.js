const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true
  },
});

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);
