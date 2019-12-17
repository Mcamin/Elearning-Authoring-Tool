const express = require('express');

const router = express.Router();

//Get all lessons
router.get('/', (req, res, next) =>{
  res.status(200).json({
    message:'Handling GET requests to /products'
  });
});

//Get a single lesson
router.get('/:lessonId', (req, res, next) =>{
  const id = req.params.lessonId;
  res.status(200).json({
    message: 'this is the id',
    id:id
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
  res.status(201).json({
    message:'Handling POST requests to /products'
  });
});



module.exports = router;
