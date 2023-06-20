const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cardRoute = require("./routes/card");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://mern-ecommerce.onrender.com"],
  })
);
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cards", cardRoute);
app.use("/api/checkout", stripeRoute);

app.listen(
  process.env.PORT || 5000 || "mern-back-app-mesox.onrender.com",
  () => {
    console.log("doo");
  }
);
