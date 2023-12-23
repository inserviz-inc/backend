const bcrypt = require("bcryptjs/dist/bcrypt");
const encryptPassword = require("../../helpers/encryptions/encryptPassword");
const {
  registerValidation,
} = require("../../helpers/validations/authValidation");
const { generateToken } = require("../../helpers/validations/jwtToken");
const UsersModel = require("../../models/UsersModel/UsersModel");

// REGISTER USER SERVICE
async function signUpUser(req, res) {
  const { email, first_name, password } = req?.body;

  // Validate request
  const { error } = registerValidation(req?.body);
  if (error) return { status: 400, message: error.details[0].message };

  //check if user exists
  const emailExists = await UsersModel.findOne({ email });
  if (emailExists) return { status: 400, message: "Email already exists" };

  //check if first_name exists
  const first_nameExists = await UsersModel.findOne({ first_name });
  if (first_nameExists)
    return { status: 400, message: "first_name already exists" };

  const newUser = new UsersModel({
    email,
    first_name,
    password: await encryptPassword(password),
  });
  const accessToken = generateToken({ ...newUser });
  try {
    const saveUser = newUser.save();
    if (saveUser) {
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
  if (!emailExist) return res.sendStatus(401);
  const validPassword = await bcrypt.compareSync(
    password,
    emailExist?.password
  );
  if (!validPassword) return res.sendStatus(401);

  const accessToken = await generateToken({ ...emailExist });
  res
    .header("Authorization", accessToken)
    .json({ status: "success", token: accessToken, user: emailExist });
}

module.exports = { signUpUser, signInUser };
