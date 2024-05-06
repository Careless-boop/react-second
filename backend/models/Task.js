const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  date: {
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number,
    timezone: String,
  },
  isImportant: Boolean,
  isDone: Boolean,
  description: String,
  taskLists: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model("Task", taskSchema);
