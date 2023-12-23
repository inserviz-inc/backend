const mongoose = require("mongoose");

module.exports = () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      if (process.env.NODE_ENV === "development") {
        console.log("DB CONNECTED");
      }
    })
    .catch((err) => () => {
      if (process.env.NODE_ENV === "development") {
        console.log("AN ERROR OCCURED WHEN CONNECTING TO DB");
      }
    });
};
