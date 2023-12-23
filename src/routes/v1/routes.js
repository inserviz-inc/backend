const router = require("express").Router();

// User Routes
router.use("/auth", require("../../controller/UsersController/UsersController"))

// Listing Skills Route
router.use("/inprov", require("../../controller/ListSkills/ListSkillsController"))

module.exports = router