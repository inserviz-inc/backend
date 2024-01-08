const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    company_name: {
      type: String,
      required: false,
    },
    experience: {
      start: Date,
      end: Date,
    },

    designation: {
      type: String,
      required: false,
    },
    job_description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    bgImage: {
      type: String,
      required: false,
    },
    phone_number: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    gps_address: {
      type: String,
      required: false,
    },
    skills: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    gigs: {
      type: Number,
      required: false,
      default: 0,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    profile_percentage: {
      type: Number,
      required: false,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      required: false,
    },
   
    socials: [],
    portfolio: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
