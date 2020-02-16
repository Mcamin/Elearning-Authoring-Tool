const mongoose = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function
});
const upload = multer({dest: 'uploads/'})
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
  socialMediaHandles: {
    type: Map,
    of: Number,
    required: true,
  }
});

module.exports = mongoose.model('Course', courseSchema);
