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
const qs = require("querystring");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const verifyEmail = require("../../../public/verifyEmail");
const NotificationModel = require("../../models/Notifications/NotificationModel");
const PostGigModel = require("../../models/PostGig/PostGigModel");
require("dotenv").config();

// REGISTER USER SERVICE
async function signUpUser(req, res) {
  const {
    email,
    username,
    password,
    isVerified,
    image,
    first_name,
    last_name,
  } = req?.body;

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
    isVerified: isVerified || false,
    image: image || "",
    first_name: first_name || "",
    last_name: last_name || "",
  });
  const accessToken = generateToken({ ...newUser });
  try {
    const saveUser = newUser.save();
    if (saveUser) {
      const mail_body = welcomEmail(username);
      const subject = "Welcome to Inserviz";
      await sendMail(email, subject, mail_body);
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

// SIGNIN WITH GOOGLE

async function signUpWithGoogle(res, res) {
  const rootURL = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: process.env.REDIRECT_URL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  const url = `${rootURL}?${qs.toString()}`;

  return url;
}

async function getSignInCode(req, res) {
  const { code } = req?.query;

  try {
    const values = {
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URL,
      grant_type: "authorization_code",
    };
    const { data } = await axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify(values),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const googleUser = jwt.decode(data?.id_token);
    const email = googleUser?.email;
    const username = email?.split("@")[0];
    const password = googleUser?.at_hash;
    const image = googleUser?.picture;
    const first_name = googleUser?.given_name;
    const last_name = googleUser?.family_name;

    // // Check if the user already exists
    const existingUser = await UsersModel.findOne({ email });

    // if (existingUser) {
    //   res.cookie("error", "User already exist", { httpOnly: false });
    //   res.redirect(process.env.HOME_REDIRECT_URL);
    // }
    // else {
    //   // Create a new user
    const newUser = new UsersModel({
      email,
      username,
      password: await encryptPassword(password),
      image,
      first_name,
      last_name,
    });

    const savedUser = await newUser.save();
    if (savedUser) {
      res.cookie("email", savedUser?.email, { httpOnly: true, secure: false });
      res.cookie("first_name", savedUser?.first_name, {
        httpOnly: true,
        secure: false,
      });
      res.cookie("last_name", savedUser?.last_name, {
        httpOnly: true,
        secure: false,
      });
      res.cookie("image", savedUser?.image, { httpOnly: true, secure: false });
      res.cookie("username", savedUser?.username, {
        httpOnly: true,
        secure: false,
      });
      res.cookie("password", savedUser?.password, {
        httpOnly: true,
        secure: false,
      });
      res.cookie("_id", savedUser?._id, { httpOnly: true, secure: false });
      res.redirect(process.env.HOME_REDIRECT_URL);
    }
    // }
  } catch (error) {
    // console.error('Error during authentication:', error.message);
    return { error: "error", message: "Error during authentication" };
  }
}

// FORGOT PASSWORD SERVICE
async function forgotPassword(req) {
  const { email } = req.body;

  // Check if email exist
  const emailExist = await UsersModel.findOne({ email: email });
  if (!emailExist)
    return { status: "errors", message: "there is no user with this email" };

  const token = await generateToken({ ...emailExist });
  const mail_body = passwordReset(emailExist?._id);
  const subject = "Password Reset";
  await sendMail(email, subject, mail_body);
  return { status: "success" };
}

// RESET PASSWORD SERVICE
async function resetPassword(req) {
  const { password, idx } = req.body;

  try {
    const user = await UsersModel.updateOne(
      { _id: idx },
      { $set: { password: await encryptPassword(password) } }
    );
    return { status: "success", data: user };
  } catch (error) {
    return { status: "error", message: error };
  }
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

  const updateInfo = { ...req.body };
  let image_url = "";

  if (req?.file) {
    image_url = await uploadFile(req.file, `image/${idx}`);
    updateInfo.image = image_url;
  }

  try {
    // Update user profile in the database
    const response = await UsersModel.updateOne(
      { _id: idx },
      { ...updateInfo }
    );

    if (response.ok) {
      // Calculate the profile_percentage based on the number of non-empty fields
      const user = await UsersModel.findById(idx);
      const filledFields = Object.values(user.toJSON()).filter(
        (value) => !!value
      );
      const totalFields = Object.keys(user.schema.paths).length - 1; // Exclude __v field
      const profilePercentage = Math.round(
        (filledFields.length / totalFields) * 100
      );

      // Update profile_percentage in the database
      await UsersModel.updateOne(
        { _id: idx },
        { profile_percentage: profilePercentage }
      );

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

// VERIFICATION LINK

async function sendVerificationLink(req) {
  const { idx } = req.params;

  try {
    const user = await UsersModel.findOne({ _id: idx });

    if (user) {
      const subject = "Email Confirmation";
      const mail_body = verifyEmail(idx);
      await sendMail(user?.email, subject, mail_body)
        .then((res) => {
          return { status: "success" };
        })
        .catch((error) => {
          return { error: "An error occured when sending email" };
        });
      return { status: "success" };
    }
  } catch (error) {
    return { error: error?.message };
  }
}

async function verifyLink(req, res) {
  const { idx } = req.params;

  try {
    const user = await UsersModel.updateOne({ _id: idx }, { isVerified: true });
    if (user) {
      return res.sendFile(__dirname + "/views/success.html");
    }
    return res.send("Invalid link");
  } catch (error) {
    return { status: "error" };
  }
}

async function searchResults(req, res) {
  const { search } = req.body;

  const listresults = await ListSkillsModel.aggregate([
    {
      $match: {
        $or: [
          { gig_title: { $regex: search, $options: "i" } },
          { gig_description: { $regex: search, $options: "i" } },
          { gig_category: { $regex: search, $options: "i" } },
        ],
      },
    },
  ]);
  const gigsresults = await PostGigModel.aggregate([
    {
      $match: {
        $or: [
          { gig_title: { $regex: search, $options: "i" } },
          { gig_description: { $regex: search, $options: "i" } },
          { gig_category: { $regex: search, $options: "i" } },
        ],
      },
    },
  ]);

  try {
    return { listresults, gigsresults };
  } catch (error) {
    return { error };
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
  signUpWithGoogle,
  getSignInCode,
  sendVerificationLink,
  verifyLink,
  searchResults,
};
