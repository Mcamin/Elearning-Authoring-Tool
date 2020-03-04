const express = require("express");
const router = express.Router();
const imsController = require('../controllers/imsTool');

router.post("/:resourceType/:toolID", imsController.initialize );
router.post("/", imsController.getPage );
router.post("/asses-quiz", imsController.asses_quiz);
router.post("/close", imsController.delete_session);






module.exports = router;
