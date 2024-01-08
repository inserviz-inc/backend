const mongoose = require("mongoose");

const notificationModel = new mongoose.Schema(
  {
    status: {
      type: Number,
      required: false,
      default: 0,
    },
    id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    notification_type: {
      type: String,
      required: true,
      default: "system",
    },
    payload: {
      type: Object,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("notifications", notificationModel);
