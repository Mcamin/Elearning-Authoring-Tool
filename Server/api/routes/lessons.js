const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Lesson  = require('../models/lesson');
const multer = require('multer');
const crypto  = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require ('gridfs-stream');




const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/lessons');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString()+file.originalname);
  }
})
const upload = multer({storage:storage})
//Get all lessons
router.get('/', (req, res, next) =>{
  res.status(200).json({
    message:'Handling GET requests to /lessons'
  });
});

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

//Create a lesson
router.post('/', (req, res, next) =>{
  const lesson =  new Lesson({
    _id: mongoose.Types.ObjectId(),
    title: req.body.name,
    content: req.body.content,

  });
  lesson.save()
        .then(res =>{
          console.log(res);
        })
  .catch(err => console.log(err));
  res.status(201).json({
    message:'Handling POST requests to /products',
    createdLesson: lesson
  });
});



module.exports = router;
