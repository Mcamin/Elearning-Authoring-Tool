const mongoose = require("mongoose");

/*TODO: add request to populate section usage and section content */
const Module = require("../models/module");
const Course = require("../models/course");
const Section = require("../models/section");

// Get sections 10 by 10
exports.sections_get_all = (req, res, next) => {
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Section.find()
  .select("title description tokens modulesIndex uuid type")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      sections: docs.map(doc => {
        return {
          uuid: doc.uuid,
          title: doc.title,
          type: doc.type,
          description: doc.description,
          modulesIndex: doc.modulesIndex,
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

// Get section by id
exports.sections_get_section = (req, res, next) => {

  Section.findOne({uuid: req.params.sectionId})
  .select("title description modulesIndex tokens uuid type ")
  .exec()
  .then(section => {
    if (!section) {
      return res.status(404).json({
        message: "Section not found"
      });
    }
    res.status(200).json({
      section: section
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Create a section
exports.sections_create_section = (req, res, next) => {
  const section = new Section({
    _id: mongoose.Types.ObjectId(),
    uuid:req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    modulesIndex: req.body.modulesIndex,
  });
  section
  .save()
  .then(result => {
    res.status(201).json({
      message: "Section stored",
      createdSection: {
        uuid: result.uuid,
        title: result.title,
        type: result.type,
        description: result.description,
        modulesIndex: result.modulesIndex,
        tokens: result.tokens
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

// Update a section
exports.sections_update_section = (req, res, next) => {

  const id = req.params.sectionId;

  Section.updateOne({ uuid: id }, { $set: req.body })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Section updated",
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

//Delete a section
exports.sections_delete_section = (req, res, next) => {
  Section.deleteOne({uuid: req.params.sectionId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Section deleted",
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};
