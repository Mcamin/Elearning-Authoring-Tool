const mongoose = require("mongoose");

/*TODO: add request to populate lesson usage */
const Module = require("../models/module");
const Lesson = require("../models/lesson");

// Get lessons 10 by 10
exports.lessons_get_all = (req, res, next) => {

  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
 Lesson.find()
  .select("title description content _id")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
     lessons: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          description: doc.description,
          content: doc.content
        };
      })
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Get a lesson by id
exports.lessons_get_lesson = (req, res, next) => {
 Lesson.findOne({uuid: req.params.lessonId})
  .exec()
  .then(lesson => {
    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found"
      });
    }
    res.status(200).json({
     lesson:lesson
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Create a lesson
exports.lessons_create_lesson = (req, res, next) => {
  const lesson = new Lesson({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  });
 lesson
  .save()
  .then(result => {
    res.status(201).json({
      message: "Lesson stored",
      createdLesson: {
        _id: result._id,
        title: result.title,
        description: result.description,
        content: result.content
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

// Update a lesson
exports.lessons_update_lesson = (req, res, next) => {
  const id = req.params.lessonId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
 Lesson.update({ _id: id }, { $set: updateOps })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Lesson updated",
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

//Delete a lesson
exports.lessons_delete_lesson = (req, res, next) => {
  Lesson.remove({_id: req.params.lessonId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Lesson deleted",
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};
