const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CourseController = require('../controllers/course');

router.get("/", CourseController.courses_get_all);

router.post("/", CourseController.courses_create_course);

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
