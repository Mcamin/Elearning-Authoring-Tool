const mongoose = require('mongoose');
const lessonSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  content: String,
});

module.exports = mongoose.model('Course',courseSchema);
