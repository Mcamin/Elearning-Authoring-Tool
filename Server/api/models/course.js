const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  languages: {
    type: Array,
    of: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,
    of: Number,
    required: false
  },
  thumbnail:
    {
      type: String,
      required: false,
    },
  contentIndex: Object
});

module.exports = mongoose.model('Course', courseSchema);
