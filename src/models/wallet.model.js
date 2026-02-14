const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 10
    },
    points: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
