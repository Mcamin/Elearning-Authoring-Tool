const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/courses/images/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
const CourseController = require('../controllers/course');

router.get("/", CourseController.courses_get_all);

router.post("/",upload.single('thumbnail'),CourseController.courses_create_course);

router.get("/:courseId", CourseController.courses_get_course);

router.patch("/:courseId", CourseController.courses_update_course);

router.delete("/:courseId", CourseController.courses_delete_course);

module.exports = router;


/*
Create :
{

  "title": "Dummy Course 1",
  "description": "Dummy Course 1 description",
  "languages" : "en",
  "duration": 45,
  "thumbnail":"https://unsplash.com/photos/s9CC2SKySJM"


}
Update:
[{
  "propName": "languages",
  "value":"en"


}]*/
