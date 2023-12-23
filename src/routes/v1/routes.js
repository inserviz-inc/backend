const router = require("express").Router();

router.use("/auth", require("../../controller/UsersController/UsersController"))

module.exports = router