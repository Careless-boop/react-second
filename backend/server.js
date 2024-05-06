const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reactSecondDB");

app.use(cors());
app.use(express.json());

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

app.get("/api/taskLists/:taskListId", async (req, res) => {
  try {
    const taskLists = await TaskList.find({
      _id: req.params.taskListId,
    });
    res.json(taskLists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.post("/api/taskLists", async (req, res) => {
  try {
    const { name, img, isRemovable } = req.body;

    const newTaskList = new TaskList({
      name,
      img,
      isRemovable,
    });

    await newTaskList.save();

    res.status(201).json(newTaskList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.post("/api/taskLists/:taskListId/color", async (req, res) => {
  const { taskListId } = req.params;
  const { color } = req.body;

  try {
    const updatedTaskList = await TaskList.findByIdAndUpdate(
      taskListId,
      { color },
      { new: true }
    );

    if (!updatedTaskList) {
      return res.status(404).json({ error: "Task list not found" });
    }

    res.status(200).json(updatedTaskList);
  } catch (error) {
    console.error("Error updating task list color:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/api/taskLists/:taskListId", async (req, res) => {
  try {
    const taskListId = req.params.taskListId;
    await TaskList.findByIdAndDelete(taskListId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const Task = require("./models/Task");

app.get("/api/tasks/:taskListId", async (req, res) => {
  try {
    const tasks = await Task.find({
      taskLists: { $in: [req.params.taskListId] },
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
