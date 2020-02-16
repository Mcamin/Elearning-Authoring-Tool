const express = require('express');

const router = express.Router();

//Get all quizzes
router.get('/', (req, res, next) =>{
  res.status(200).json({
    message:'Handling GET requests to /quizzes'
  });
});

//Get a single quiz
router.get('/:quizId', (req, res, next) =>{
  const id = req.params.quizId;
  res.status(200).json({
    message: 'this is the quiz id',
    id:id
  });
});

//Update a single quiz
router.patch('/:quizId', (req, res, next) =>{
  const id = req.params.quizId;
  res.status(200).json({
    message: 'updated the quiz',
    id:id
  });
});

router.delete('/:quizId', (req, res, next) =>{
  const id = req.params.quizId;
  res.status(200).json({
    message: 'deleted the quiz',
    id:id
  });
});

//Create a quiz
router.post('/', (req, res, next) =>{
  res.status(201).json({
    message:'Handling POST requests to /quizzes'
  });
});



module.exports = router;
