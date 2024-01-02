const {
  postGig,
  getPostedGigs,
  getSinglePostedGigs,
} = require("../../views/PostGigView/PostGig.service");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("files", 3);

const router = require("express").Router();

router.post("/post-gig", upload, async (req, res) => {
  return res.json(await postGig(req));
});

router.get("/get-posted-gigs", async (req, res) => {
  return res.json(await getPostedGigs(req));
});
router.get("/gigs/:idx", async (req, res) => {
  return res.json(await getSinglePostedGigs(req));
});

module.exports = router;
