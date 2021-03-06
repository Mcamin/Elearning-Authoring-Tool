const mongoose = require("mongoose");
const fs = require('fs');

/*TODO: add request to populate lesson usage */
const Course = require("../models/course");
const Section = require("../models/section");
const Module = require("../models/module");

// Get courses 10 by 10
exports.courses_get_all = (req, res, next) => {
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Course.find()
  .select("title description tokens category duration tags thumbnail languages contentIndex  uuid")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      courses: docs.map(doc => {
        return {
          uuid: doc.uuid,
          title: doc.title,
          languages: doc.languages,
          description: doc.description,
          category: doc.category,
          duration: doc.duration,
          tags: doc.tags,
          thumbnail: doc.thumbnail,
          contentIndex: doc.contentIndex,
          tokens: doc.tokens
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

// Get a course by id
exports.courses_get_course = (req, res, next) => {
  Course.findOne({uuid: req.params.courseId})
  .select("title description category duration tokens tags thumbnail languages contentIndex  uuid")
  .exec()
  .then(course => {
    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }
    res.status(200).json({
      course:course
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Create a course
exports.courses_create_course = (req, res, next) => {
    let filename = req.file ? req.file.filename : '';

  const course = new Course({
    _id: mongoose.Types.ObjectId(),
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    languages:req.body.languages,
    tags: req.body.tags,
    thumbnail: filename,
    duration: req.body.duration

  });
  course
  .save()
  .then(result => {
    res.status(201).json({
      message: "Course stored",
      createdCourse: {
        uuid: result.uuid,
        category:result.category,
        title: result.title,
        description: result.description,
        languages: result.languages,
        duration: result.duration,
        tags: result.tags,
        tokens: result.tokens,
        thumbnail: result.thumbnail,
        contentIndex: result.contentIndex,
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

// Update a course
exports.courses_update_course = (req, res, next) => {
  const id = req.params.courseId;

  Course.updateOne({ uuid: id }, { $set: req.body })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Course updated",
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

//Delete a Course
exports.courses_delete_course = (req, res, next) => {
    let filename = req.query.filename;
 let deleteImage = new Promise(
   (resolve,reject) =>{
     if(filename != null && filename.length > 0){

     fs.unlink('uploads/courses/images/'+filename,  (err) =>{
       if (err)  reject (err);
         resolve("file deleted");
     });
     }
     else{
       resolve(" no file to deleted");
     }
   }
 );
  deleteImage
    .then(f =>{

      Course.deleteOne({uuid: req.params.courseId}).exec()
    })
  .then(result => {
    res.status(200).json({
      message: "Course deleted",
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};
