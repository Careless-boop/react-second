const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema(
  {
    img: {
      src: String,
      isEmoji: Boolean,
    },
    name: String,
    isRemovable: Boolean,
    color: String,
  }
);

module.exports = mongoose.model("TaskList", taskListSchema, "taskLists");
