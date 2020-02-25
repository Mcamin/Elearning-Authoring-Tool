const mongoose = require("mongoose");

/*TODO: add request to populate interaction usage */
const Module = require("../models/module");
const Interaction = require("../models/interaction");

// Get interactions 10 by 10
exports.interactions_get_all = (req, res, next) => {
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Interaction.find()
  .select("title description questions questionsIndex content _id")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      interactions: docs.map(doc => {
        return {
          _id: doc._id,
          title: doc.title,
          description: doc.description,
          questions: doc.questions,
          questionsIndex:doc.questionsIndex
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

// Get an interaction by id
exports.interactions_get_interaction = (req, res, next) => {
  Interaction.findOne({uuid: req.params.interactionId})
  .exec()
  .then(interaction => {
    if (!interaction) {
      return res.status(404).json({
        message: "Interaction not found"
      });
    }
    res.status(200).json({
      interaction:interaction
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

// Create an interaction
exports.interactions_create_interaction = (req, res, next) => {
  const interaction = new Interaction({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    questions: req.body.questions,
    questionsIndex: req.body.questionsIndex
  });
  interaction
  .save()
  .then(result => {
    res.status(201).json({
      message: "Interaction stored",
      createdInteraction: {
        _id: result._id,
        title: result.title,
        description: result.description,
        questions: result.questions,
        questionsIndex: result.questionsIndex
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

// Update an interaction
exports.interactions_update_interaction = (req, res, next) => {
  const id = req.params.interactionId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Interaction.update({ _id: id }, { $set: updateOps })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Interaction updated",
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

//Delete an Interaction
exports.interactions_delete_interaction = (req, res, next) => {
  Interaction.remove({_id: req.params.interactionId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Interaction deleted",
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
};
