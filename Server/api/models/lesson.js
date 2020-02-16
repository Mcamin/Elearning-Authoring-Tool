const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, default: 'Lesson'},
  title: {
    type: String,
    required: true
  },
  description: String,
  content: String
});

module.exports = mongoose.model('Lesson', lessonSchema);

