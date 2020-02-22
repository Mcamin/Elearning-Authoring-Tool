const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid:{
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: String,
  description: String,
  languages: { type: Array,
    required: true},
  duration: Number,
  tags: {
    type: Array,
    required: false
  },
  thumbnail: String,
  contentIndex: { type: mongoose.Schema.Types.Mixed, default: {} }

},{ minimize: false,timestamps: true });

module.exports = mongoose.model('Course', courseSchema);

