const { uploadFile } = require("../../helpers/uploads/imageUpload");
const PostGigModel = require("../../models/PostGig/PostGigModel");
const mongoose = require("mongoose");

async function postGig(req) {
  const { id } = req.body;

  // const { files } = req.files;
  // console.log(files)

  const userfiles = await Promise.all(
    req.files.map(async (file) => await uploadFile(file, `files/${id}`))
  );

  try {
    const response = await PostGigModel.create({
      ...req.body,
      files: userfiles,
    });
    if (response) {
      return { status: "success", data: "Gig was created succefully" };
    }
    return { error: "error", data: "An error occured" };
  } catch (error) {
    return { error: "error", data: error };
  }
}

// GET ALL USER INFO
async function getPostedGigs(req) {
  try {
    // const response = await ListSkillsModel.find();
    const results = await PostGigModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "id",
          foreignField: "_id",
          as: "userinfo",
        },
      },
      {
        $unwind: "$userinfo",
      },
      {
        $project: {
          id: 1,
          _id: 1,
          gig_title: 1,
          gig_salary: 1,
          files: 1,
          "userinfo.username": 1,
          "userinfo.first_name": 1,
          "userinfo.last_name": 1,
          "userinfo.image": 1,
        },
      },
    ]);
    return { data: results };
  } catch (error) {
    return { error: error };
  }
}

// GET SINGLE POSTED GIG INFO
async function getSinglePostedGigs(req) {
  const { idx } = req?.params;

  try {
    // const response = await ListSkillsModel.find();
    const results = await PostGigModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(idx) } },
      {
        $lookup: {
          from: "users",
          localField: "id",
          foreignField: "_id",
          as: "userinfo",
        },
      },
    ]);
    return { data: results };
  } catch (error) {
    return { error: error };
  }
}

module.exports = { postGig, getPostedGigs, getSinglePostedGigs };
