const router = require("express").Router();
const lessonController = require("../../controllers/lessonControllers");
const progressController = require("../../controllers/progressControllers");
const pointsController = require("../../controllers/pointsControllers");
const userController = require("../../controllers/userControllers");

router.route("/testing").get(lessonController.findAll)

module.exports = router

