const {
  signInUser,
  signUpUser,
  forgotPassword,
} = require("../../views/UsersViews/Users.service");

const router = require("express").Router();

// REGISTER USER ENDPOINT
router.post("/signup", async (req, res) => {
  return res.json(await signUpUser(req, res));
});

// LOGIN USER ENDPOINT
router.post("/signin", async (req, res) => {
  return res.json(await signInUser(req, res));
});

// SEND RESET PASSWORD LINK ENDPOINT
router.post("/forgot-password", async (req, res) => {
  return res.json(await forgotPassword(req, res));
});

module.exports = router;
