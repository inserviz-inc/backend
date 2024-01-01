const { uploadFile } = require("../../helpers/uploads/imageUpload");
const PostGigModel = require("../../models/PostGig/PostGigModel");

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

module.exports = { postGig };
