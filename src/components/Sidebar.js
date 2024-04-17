import React from "react";
import "../css/Sidebar.css";
import TaskListItem from "./TaskListItem";

function Sidebar({ addTaskList, taskListsData }) {
  function handleAddClick() {
    console.log("Pushed");
    const newTaskList = {
      img: {
        src: "🫥",
        isEmoji: true,
      },
      name: "New",
      tasks: [],
      isRemovable: true,
    };
    addTaskList([...taskListsData, newTaskList]);
    console.log("End");
  }

  return (
    <nav className="main__nav">
      <ul className="nav__list">
        {taskListsData.map((taskList, index) => (
          <TaskListItem key={index} id={index} taskList={taskList} />
        ))}
      </ul>
      <div className="nav__add-tasklist">
        <button
          className="add-tasklist-button"
          onClick={() => handleAddClick()}
        >
          <span className="add-tasklist-button__span">+</span>Add task list
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
