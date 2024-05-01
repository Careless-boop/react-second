const TaskList = require("./models/TaskList");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reactSecondDB");

const temp = new TaskList({
  name: "test",
  img: {
    src: "😱",
    isEmoji: true,
  },
  isRemovable: true,
});
temp.save().then(saved=>{
  console.log(saved._id);
});
