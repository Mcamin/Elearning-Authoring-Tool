const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
});

module.exports = mongoose.model('Course',courseSchema);
