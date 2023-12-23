const { signInUser, signUpUser } = require("../../views/UsersViews/Users.service");

const router = require("express").Router();

// REGISTER USER ENDPOINT
router.post("/signup", async (req, res) => {
  res.json(await signUpUser(req, res));
});

// LOGIN USER ENDPOINT
router.post("/signin", async (req, res) => {
  res.json(await signInUser(req, res));
});

module.exports = router;
