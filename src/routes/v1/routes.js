const router = require("express").Router();

// User Routes
router.use("/auth", require("../../controller/UsersController/UsersController"))
router.use("/", require("../../controller/UsersController/UsersController"))
router.use("/user", require("../../controller/UsersController/UsersController"))
router.use("/userprofile", require("../../controller/UsersController/UsersController"))
router.use("/user", require("../../controller/UsersController/UsersController"))

// Listing Skills Route
router.use("/inprov", require("../../controller/ListSkills/ListSkillsController"))

// Listing Intracts POSTED GIGS Route
router.use("/intracts", require("../../controller/PostGig/PostGigController"))


// post GIG Route
router.use("/intracts", require("../../controller/PostGig/PostGigController"))

module.exports = router