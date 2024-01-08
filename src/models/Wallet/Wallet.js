const mongoose = require("mongoose");

const walletModel = new mongoose.Schema(
  {
    id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      float: true,
      default: 0.0,
      min: 0.0,
    },
    cards: [],
    receivers: [
      {
        email: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        payoutMethod: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletModel);
