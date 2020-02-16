const mongoose = require('mongoose');

const interactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  Description: String,
  questions: Array,
  questionsIndex: Object,
});

module.exports = mongoose.model('Interaction',interactionSchema);
