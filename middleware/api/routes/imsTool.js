const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const imsController = require('../controllers/imsTool');

router.post("/:resourceType/:toolID", upload.none(), imsController.initialize_communication );
router.post("/asses-quiz", imsController.asses_quiz);
router.get("/grade/:sessionID/:grade", imsController.sendFeedback);
router.get("/", imsController.playground);





module.exports = router;
