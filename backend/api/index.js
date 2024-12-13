const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("../src/routes/index"); // Đảm bảo đường dẫn đúng

// Load environment variables
dotenv.config();

// Khởi tạo Express app
const app = express();

// Middleware cho Express để parse dữ liệu JSON
app.use(express.json());

// Kết nối MongoDB
mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Định nghĩa các routes
routes(app);

// Export Express app như là handler cho Vercel
module.exports = (req, res) => {
  app(req, res);  // Vercel yêu cầu trả về handler như thế này
};
