const {
  listSkills,
  listSkillsImages,
  getListSkills,
  getUserAllInfo,
  getSingleGigInfo,
} = require("../../views/ListSkillsViews/ListSkills.service");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("files", 3);

const router = require("express").Router();

router.post("/list-skills", upload, async (req, res) => {
  return res.json(await listSkills(req));
});

router.post("/list-skills-images", upload, async (req, res) => {
  return res.json(await listSkillsImages(req));
});

router.get("/get-list-skills", async (req, res) => {
  return res.json(await getListSkills(req));
});

router.get("/get-all-user-info", async (req, res) => {
  return res.json(await getUserAllInfo(req));
});

// SINGLE GIG INFO
router.get("/gigs/:idx", async (req, res) => {
  return res.json(await getSingleGigInfo(req));
});

module.exports = router;
