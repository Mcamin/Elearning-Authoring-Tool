const mongoose = require("mongoose");

/*TODO: add request to populate module usage and module content */
const Module = require("../models/module");
const Section = require("../models/section");

// Get modules 10 by 10
exports.modules_get_all = (req, res, next) => {
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Module.find()
  .select("title description contentIndex type uuid")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      modules: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          description: doc.description
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

// Get module by id
exports.modules_get_module = (req, res, next) => {
  Module.findOne({uuid: req.params.moduleId})
  .select("title description contentIndex type uuid")
  .exec()
  .then(module => {
    if (!module) {
      return res.status(404).json({
        message: "Module not found"
      });
    }
    res.status(200).json({
      module: module
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Create a module
exports.modules_create_module = (req, res, next) => {
  const module = new Module({
    _id: mongoose.Types.ObjectId(),
    uuid:req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    contentIndex: req.body.contentIndex,
  });
  module
  .save()
  .then(result => {
    res.status(201).json({
      message: "Module stored",
      createdModule: {
        uuid: result.uuid,
        title: result.title,
        description: result.description,
        contentIndex: result.contentIndex
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

// Update a module
exports.modules_update_module = (req, res, next) => {
  const id = req.params.moduleId;
  Module.updateOne({ uuid: id }, { $set: req.body })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Module updated",
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

//Delete a module
exports.modules_delete_module = (req, res, next) => {
  Section.deleteOne({uuid: req.params.moduleId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Module deleted",
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};
