const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
  _id: Number,
  img: {
    src: String,
    isEmoji: Boolean,
  },
  name: String,
  isRemovable: Boolean,
});

module.exports = mongoose.model("Item", taskListSchema);
