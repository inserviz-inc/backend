const {
  listSkills, listSkillsImages,
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

module.exports = router;
