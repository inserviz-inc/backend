const router = require("express").Router();

// User Routes
router.use("/auth", require("../../controller/UsersController/UsersController"))
router.use("/user", require("../../controller/UsersController/UsersController"))
router.use("/userprofile", require("../../controller/UsersController/UsersController"))
router.use("/user", require("../../controller/UsersController/UsersController"))

// Listing Skills Route
router.use("/inprov", require("../../controller/ListSkills/ListSkillsController"))

module.exports = router