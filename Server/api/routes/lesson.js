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
    console.log("retrieved from DB \n",doc);
    if(doc)
    {
      res.status(200).json(doc);
    }else{
      res.status(404).json({message:"No valid entry found for provided ID"});
    }

  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  });
});

//Get all lessons
router.get('/', (req, res, next) =>{
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Lesson.find()
  .select('title description _id')
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    console.log(docs);
    const response = {
      count:docs.length,
      lessons: docs
    };
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  });
});

// Update a single lesson
router.patch('/:lessonId', (req, res, next) =>{
  const id = req.params.lessonId;
  const updateOps = {};
  for (const ops of req.body)
      updateOps[ops.propName] = ops.value;
  Lesson.update({_id: id},{$set:updateOps})
  .exec()
  .then(result =>{
    console.log(result);
    res.status(200).json({result});
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({error:error});
  });

});

// Delete a lesson
router.delete("/:lessonId", (req, res, next) =>{
 const id= req.params.lessonId;
 Lesson
 .remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(error =>{
    console.log(error);
    res.status(500).json({error:error});
  })
});

// Create a lesson
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
        message: "Lesson Created",
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


module.exports = router;
