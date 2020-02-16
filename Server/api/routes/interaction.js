const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const InteractionController = require('../controllers/interaction');

router.get("/", InteractionController.interactions_get_all);

router.post("/", InteractionController.interactions_create_interaction);

router.get("/:interactionId", InteractionController.interactions_get_interaction);

router.patch("/:interactionId", InteractionController.interactions_update_interaction);

router.delete("/:interactionId", InteractionController.interactions_delete_interaction);

module.exports = router;
