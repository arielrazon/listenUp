const router = require("express").Router();
const lessonRoutes = require("./lessons");

//Api Routes

router.use("/lessons", lessonRoutes);

module.exports = router