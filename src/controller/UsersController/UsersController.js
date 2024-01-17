const {
  signInUser,
  signUpUser,
  forgotPassword,
  resetPassword,
  updateUsername,
  updateUserProfile,
  getSingleUser,
  getSignInCode,
  signUpWithGoogle,
  sendVerificationLink,
  verifyLink,
  searchResults,
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

// LOGIN WITH GOOGLE ENDPOINT
router.get("/socials-google", async (req, res) => {
  return signUpWithGoogle(req, res);
});

// LOGIN REDIRECT CALLACK ENDPOINT
router.get("/api/oauth/google", async (req, res) => {
  return getSignInCode(req, res);
});

//  FORGOTTEN PASSWORD LINK ENDPOINT
router.post("/forgot-password", async (req, res) => {
  return res.json(await forgotPassword(req, res));
});

//  RESET PASSWORD LINK ENDPOINT
router.put("/reset-password", async (req, res) => {
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

// SEND VERIFICATION LINK
router.get("/verification/:idx", async (req, res) => {
  return res.json(await sendVerificationLink(req, res));
});

router.get("/verify/user/link/:idx", async (req, res) => {
  return await verifyLink(req, res);
});

router.post("/search", async (req, res) => {
  return res.json(await searchResults(req, res));
});

module.exports = router;
