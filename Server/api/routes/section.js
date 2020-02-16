const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const SectionController = require('../controllers/section');

router.get("/", SectionController.sections_get_all());

router.post("/", SectionController.sections_create_section());

router.get("/:sectionId", SectionController.sections_get_section());

router.patch("/:sectionId", SectionController.sections_update_section());

router.delete("/:sectionId", SectionController.sections_delete_section());

module.exports = router;
