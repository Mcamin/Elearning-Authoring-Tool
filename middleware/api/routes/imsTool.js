const express = require("express");
const router = express.Router();

const imsController = require('../controllers/imsTool');

router.post("/:resourceType/:toolID", imsController.initialize_communication );
router.post("/asses-quiz", imsController.asses_quiz);
router.get("/grade/:sessionID/:grade", imsController.sendFeedback);
router.get("/", imsController.playground);
router.get("/index/multiplechoice/:id", imsController.fetchcontent );
router.post("/index", imsController.initialize );





module.exports = router;
