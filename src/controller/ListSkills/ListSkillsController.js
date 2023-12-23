const { listSkills } = require("../../views/ListSkillsViews/ListSkills.service");

const router = require("express").Router();

router.post("/list-skills", async (req, res) => {
  return res.json(await listSkills(req));
});

module.exports = router;
