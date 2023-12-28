const bcrypt = require("bcryptjs/dist/bcrypt");
const encryptPassword = require("../../helpers/encryptions/encryptPassword");
const {
  registerValidation,
} = require("../../helpers/validations/authValidation");
const { generateToken } = require("../../helpers/validations/jwtToken");
const UsersModel = require("../../models/UsersModel/UsersModel");
const sendMail = require("../../helpers/sendmail/sendmail");
const welcomEmail = require("../../../public/welcome");
const passwordReset = require("../../../public/passwordreset");
const { uploadFile } = require("../../helpers/uploads/imageUpload");
const ListSkillsModel = require("../../models/ListSkills/ListSkillsModel");
const { default: mongoose } = require("mongoose");

// REGISTER USER SERVICE
async function signUpUser(req, res) {
  const { email, username, password } = req?.body;

  // Validate request
  const { error } = registerValidation(req?.body);
  if (error) return { status: 400, message: error.details[0].message };

  //check if user exists
  const emailExists = await UsersModel.findOne({ email });
  if (emailExists) return { status: 400, message: "Email already exists" };

  //check if first_name exists
  const usernameExists = await UsersModel.findOne({ username });
  if (usernameExists)
    return { status: 400, message: "username already exists" };

  const newUser = new UsersModel({
    email,
    username,
    password: await encryptPassword(password),
  });
  const accessToken = generateToken({ ...newUser });
  try {
    const saveUser = newUser.save();
    if (saveUser) {
      const mail_body = welcomEmail(username);
      await sendMail(email, mail_body);
      return { message: "success", token: accessToken, user: newUser };
    }
  } catch (error) {
    return { error: error };
  }
}

// SIGN IN USER SERVICE
async function signInUser(req, res) {
  const { email, password } = req.body;

  // CHECK IF EMAIL EXIST
  const emailExist = await UsersModel.findOne({ email: email });
  if (!emailExist) return { status: "error", data: "incorrect email" };
  const validPassword = await bcrypt.compareSync(
    password,
    emailExist?.password
  );
  if (!validPassword) return { status: "error", data: "incorrect password" };

  const accessToken = await generateToken({ ...emailExist });
  res
    .header("Authorization", accessToken)
    .json({ status: "success", token: accessToken, user: emailExist });
}

// FORGOT PASSWORD SERVICE
async function forgotPassword(req) {
  const { email } = req.body;

  // Check if email exist
  const emailExist = await UsersModel.findOne({ email: email });
  if (!emailExist)
    return { status: "errors", message: "there is no user with this email" };

  const token = await generateToken({ ...emailExist });
  const mail_body = passwordReset();
  await sendMail(email, mail_body);
  return { status: "success" };
}

// RESET PASSWORD SERVICE
async function resetPassword(req) {
  const { password, email } = req.body;
  const user = await UsersModel.updateOne(
    { email: email },
    { $set: { password: await encryptPassword(password) } }
  );
  return { status: "success", data: user };
}

// UPDATE USERNAME SERVICE
async function updateUsername(req) {
  const { username } = req.body;
  const { idx } = req.params;
  // check if email exist
  const emailExist = await UsersModel.findOne({ username: username });
  if (emailExist)
    return {
      status: "errors",
      message: "Validation failed: email: Email already exists",
    };
  try {
    const response = await UsersModel.updateOne(
      { _id: idx },
      { $set: { username: username } }
    );
    if (response) {
      return { status: "success", data: { username } };
    }
  } catch (error) {
    return { status: "errors", message: error };
  }
}

// UPDATE USERINFORMATION SERVICE
async function updateUserProfile(req) {
  const { idx } = req.params;

  const image_url = await uploadFile(req.file, `image/${idx}`);
  try {
    const response = await UsersModel.updateOne(
      { _id: idx },
      { $set: { ...req.body, image: image_url } }
    );
    if (response) {
      return { status: "success", data: response };
    }
  } catch (error) {
    return { status: "error", error: error };
  }
}

// GET A SINGLE USER SERVICE
async function getSingleUser(req) {
  const { idx } = req.params;
  try {
    const response = await UsersModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(idx), // Convert the string to ObjectId if needed
        },
      },
      {
        $lookup: {
          from: "listskills",
          localField: "_id",
          foreignField: "id",
          as: "skillslisted",
        },
      },
    ]);

    if (response.length > 0) {
      return { status: "success", data: response[0] };
    }

    return { status: "error", data: "no user found with this id" };
  } catch (error) {
    return {
      status: "error",
      data: error.message || "An error occurred while fetching the user",
    };
  }
}

module.exports = {
  signUpUser,
  signInUser,
  forgotPassword,
  resetPassword,
  updateUsername,
  updateUserProfile,
  getSingleUser,
};
