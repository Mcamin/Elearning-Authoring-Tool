const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Lesson = require("../models/lesson");

//Get a single lesson
router.get('/:lessonId', (req, res, next) =>{
  const id = req.params.lessonId;
  Lesson.findById(id)
  .exec()
  .then(doc => {
    console.log(doc);
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  });
});

//Update a single lesson
router.patch('/:lessonId', (req, res, next) =>{
  const id = req.params.lessonId;
  res.status(200).json({
    message: 'updated the lesson',
    id:id
  });
});

router.post("/", (req, res, next) => {
  const lesson = new Lesson({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description
  });

  lesson
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /lesson",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
//Create a lesson

module.exports = router;
