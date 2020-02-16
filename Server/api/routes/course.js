const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CourseController = require('../controllers/course');

router.get("/", CourseController.courses_get_all);

router.post("/", CourseController.courses_create_course);

router.get("/:lessonId", CourseController.courses_get_course);

router.patch("/:lessonId", CourseController.courses_update_course);

router.delete("/:lessonId", CourseController.courses_delete_course);

module.exports = router;
