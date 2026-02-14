const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      default: 0,
      min: 0
    },
    debt: {
      type: Number,
      max: -1
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
