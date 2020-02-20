const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: String,
  languages: { type: Array,
    required: true},
  duration: Number,
  tags: {
    type: Array,
    required: false
  },
  thumbnail: String,
  contentIndex: Object
});

module.exports = mongoose.model('Course', courseSchema);
