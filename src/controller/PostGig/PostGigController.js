const { postGig } = require("../../views/PostGigView/PostGig.service");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("files", 3);

const router = require("express").Router();

router.post("/post-gig", upload, async (req, res) => {
  return res.json(await postGig(req));
});

module.exports = router;
