const { uploadFile } = require("../../helpers/uploads/imageUpload");
const ListSkillsModel = require("../../models/ListSkills/ListSkillsModel");

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
  // console.log(req.body);
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
    // files,
    id,
  } = req.body;

  // const { files } = req.files;

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

module.exports = { listSkills, listSkillsImages };
