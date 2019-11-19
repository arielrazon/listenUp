const router = require("express").Router();
const lessonController = require("../../controllers/lessonControllers");
const progressController = require("../../controllers/progressControllers");
const pointsController = require("../../controllers/pointsControllers");
const userController = require("../../controllers/userControllers");


router.route("/create")
.post(userController.create)
router.route("/login")
.get(userController.getAccount)
router.route("/lessons")
.get(lessonController.findAll);
router.route("/play/:name")
.get(lessonController.findModule);
router.route("/addpoints")
.put(pointsController.addPoints);
router.route("/mod1Two")
.put(progressController.updateMod1Two);
router.route("/mod1Three")
.put(progressController.updateMod1Two);
router.route("/mod2Two")
.put(progressController.updateMod2Two);
router.route("/mod2Three")
.put(progressController.updateMod2Three);
router.route("/mod3Two")
.put(progressController.updateMod3Two);
router.route("mod3Three").put(progressController.updateMod3Three);


module.exports = router

