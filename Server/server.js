const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("FinBuddy Backend Running 🚀");
});

const PORT = 5000;

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, "127.0.0.1", () => {
      console.log("SERVER RUNNING");
      console.log("Address:", server.address());
    });
  } catch (error) {
    console.error("STARTUP ERROR:", error);
  }
};

startServer();