const mongoose = require("mongoose");

const postGigModel = new mongoose.Schema(
  {
    id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    gig_title: {
      type: String,
      required: true,
    },
    gig_description: {
      type: String,
      required: true,
    },
    gig_category: {
      type: String,
      required: true,
    },
    gig_salary: {
      type: Number,
      required: true,
    },
    price_structure: {
      type: String,
      required: true,
    },
    delivery_time: {
      type: String,
      required: true,
    },
    mode_of_service: [],
    verified_skills_only: {
      type: Boolean,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    files: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("postGig", postGigModel);
