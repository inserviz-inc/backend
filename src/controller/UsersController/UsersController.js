const {
  signInUser,
  signUpUser,
  forgotPassword,
  resetPassword,
  updateUsername,
  updateUserProfile,
  getSingleUser,
} = require("../../views/UsersViews/Users.service");
const multer = require("multer");
const router = require("express").Router();

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");

// REGISTER USER ENDPOINT
router.post("/signup", async (req, res) => {
  return res.json(await signUpUser(req, res));
});

// LOGIN USER ENDPOINT
router.post("/signin", async (req, res) => {
  return res.json(await signInUser(req, res));
});

//  FORGOTTEN PASSWORD LINK ENDPOINT
router.post("/forgot-password", async (req, res) => {
  return res.json(await forgotPassword(req, res));
});

//  RESET PASSWORD LINK ENDPOINT
router.post("/reset-password", async (req, res) => {
  return res.json(await resetPassword(req, res));
});

//  UPDATE USERNAME ENDPOINT
router.patch("/:idx", async (req, res) => {
  return res.json(await updateUsername(req, res));
});

//  UPDATE USER INFO ENDPOINT
router.put("/:idx", upload, async (req, res) => {
  return res.json(await updateUserProfile(req, res));
});

//  GET A SINGLE USER ENDPOINT
router.get("/:idx", async (req, res) => {
  return res.json(await getSingleUser(req, res));
});

module.exports = router;
