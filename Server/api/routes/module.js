const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ModuleController = require('../controllers/module');

router.get("/", ModuleController.modules_get_all);

router.post("/", ModuleController.modules_create_module);

router.get("/:moduleId", ModuleController.modules_get_module);

router.patch("/:moduleId", ModuleController.modules_update_module);

router.delete("/:moduleId", ModuleController.modules_delete_module);

module.exports = router;
