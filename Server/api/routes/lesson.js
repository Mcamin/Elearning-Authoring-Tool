const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const LessonController = require('../controllers/lesson');

router.get("/", LessonController.lessons_get_all());

router.post("/", LessonController.lessons_create_lesson());

router.get("/:lessonId", LessonController.lessons_get_lesson());

router.patch("/:lessonId", LessonController.lessons_update_lesson());

router.delete("/:lessonId", LessonController.lessons_delete_lesson());

module.exports = router;
