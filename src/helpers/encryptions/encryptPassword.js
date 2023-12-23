const bcrypt = require("bcryptjs/dist/bcrypt"); 

const encryptPassword = (password) => {
  // encrypt password
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

module.exports = encryptPassword;