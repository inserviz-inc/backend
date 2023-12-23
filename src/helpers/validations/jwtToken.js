const jwt = require("jsonwebtoken");
require("dotenv");
const generateToken = (user) => {
  const accessToken = jwt.sign(user, process.env.ACCESSTOKEN_SECRETE);
  return accessToken;
};

module.exports = { generateToken };
