const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Initialize express App
const app = express();
const corsOptions = [
  {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credential: true,
  },
  {
    origin: "http://localhost:8000/auth/socials-google",
    optionsSuccessStatus: 200,
    credential: true,
  },
];
app.use(cors(corsOptions));
app.use(cookieParser());
// JSON
app.use(express.json());

// Specify PORT
const PORT = process.env.PORT || 8080;
require("./src/database/database")(process.env.DB_NAME);

app.use("", require("./src/routes/v1/routes"));

// Serve app
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development")
    console.log(`APP RUNNING ON PORT: ${PORT}`);
});
