const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true },
    Products: [
      {
        ProductID: {
          type: String,
        },
      },
      {
        Quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Card", ProductSchema);
