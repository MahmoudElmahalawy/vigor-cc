const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

module.exports = app;
