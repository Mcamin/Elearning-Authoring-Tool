const mongoose = require('mongoose');
const lessonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,

});

module.exports = mongoose.model('Lesson',lessonSchema);
