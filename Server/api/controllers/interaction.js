const mongoose = require("mongoose");

/*TODO: add request to populate interaction usage */
//const Module = require("../models/module");
const Interaction = require("../models/interaction");

// Get interactions 10 by 10
exports.interactions_get_all = (req, res, next) => {
  const pageOptions = {
    page: parseInt(req.body.page, 10) || 0,
    limit: parseInt(req.body.limit, 10) || 10
  };
  Interaction.find()
  .select("uuid title type description questions score shuffle ")
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      interactions: docs.map(doc => {
        return {
          title: doc.title,
          description: doc.description,
          questions: doc.questions,
          questionsIndex:doc.questionsIndex,
          uuid: doc.uuid,
          type: doc.type,
          score: doc.score,
          shuffle:doc.shuffle,
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
  .select("uuid title type description questions score shuffle ")
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
    uuid: req.body.uuid,
    title: req.body.title,
    description: req.body.description,
    questions: req.body.questions,
    shuffle: req.body.shuffle,
    score: req.body.score
  });
  interaction
  .save()
  .then(result => {
    res.status(201).json({
      message: "Interaction stored",
      createdInteraction: {
        uuid: result.uuid,
        type: result.type,
        title: result.title,
        score: result.score,
        shuffle:result.shuffle,
        description: result.description,
        questions: result.questions,
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
  Interaction.updateOne({ uuid: id }, { $set: req.body })
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
  Interaction.deleteOne({uuid: req.params.interactionId})
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
