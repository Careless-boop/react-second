const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reactSecondDB");

const TaskList = require("./models/TaskList"); 

app.get("/api/taskLists", async (req, res) => {
  try {
    const taskLists = await TaskList.find();
    res.json(taskLists);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const Task = require("./models/Task"); 

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));