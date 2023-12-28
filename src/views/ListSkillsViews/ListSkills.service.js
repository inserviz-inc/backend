const { default: mongoose } = require("mongoose");
const { uploadFile } = require("../../helpers/uploads/imageUpload");
const ListSkillsModel = require("../../models/ListSkills/ListSkillsModel");
const UsersModel = require("../../models/UsersModel/UsersModel");

async function listSkillsImages(req) {
  const { id } = req.body;
  const { files } = req.files;
  console.log(req.body);
  console.log(files);

  try {
    const results = await Promise.all(
      req.files.map(async (file) => await uploadFile(file, `files/${id}`))
    );

    console.log(results);

    // Flatten the nested arrays into a single array
    const flattenedResults = results.flat();

    return flattenedResults;
  } catch (err) {
    console.error(err);
    throw err; // or handle the error in an appropriate way
  }
}

async function listSkills(req) {
  console.log(req.body);
  console.log(req.files);
  const {
    gig_title,
    gig_description,
    gig_category,
    gig_salary,
    price_structure,
    delivery_time,
    mode_of_service,
    verified_skills_only,
    files,
    id,
  } = req.body;

  // const { files } = req.files;

  if (!req.files) {
    return { error: "Please attach files" };
  }

  const userfiles = await Promise.all(
    req.files.map(async (file) => await uploadFile(file, `files/${id}`))
  );
  console.log(userfiles);
  try {
    const response = await ListSkillsModel.create({
      ...req.body,
      files: userfiles,
    });
    if (response) {
      return { message: "success", data: "Gig was created succefully" };
    }
    return { status: "error", data: "An error occured" };
  } catch (error) {
    return { status: "error", data: error };
  }
}

// GET ALL LISTED SKILLS
async function getListSkills(req) {
  try {
    const response = await ListSkillsModel.find();
    return { data: response };
  } catch (error) {
    return { error: error };
  }
}

// GET ALL USER INFO
async function getUserAllInfo(req) {
  try {
    // const response = await ListSkillsModel.find();
    const results = await ListSkillsModel.aggregate([
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

// GET SINGLE GIG INFO
async function getSingleGigInfo(req) {
  const { idx } = req?.params;

  try {
    // const response = await ListSkillsModel.find();
    const results = await ListSkillsModel.aggregate([
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

module.exports = {
  listSkills,
  listSkillsImages,
  getListSkills,
  getUserAllInfo,
  getSingleGigInfo,
};
