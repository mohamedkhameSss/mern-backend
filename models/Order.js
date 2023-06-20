const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    Amount: { type: Number, required: true },
    Address: { type: Object, required: true },
    Statues: { type: String, default: "Pending" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
