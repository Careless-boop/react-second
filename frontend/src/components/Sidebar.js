import React from "react";
import "../css/Sidebar.css";
import TaskListItem from "./TaskListItem";

function Sidebar({ addTaskList, taskListsData, activeTaskList, setActiveTaskList }) {
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
    <nav className="sidebar">
      <ul className="sidebar__list">
        {taskListsData.map((taskList, index) => (
          <TaskListItem key={index} id={index} taskList={taskList} />
        ))}
      </ul>
      <div className="sidebar__add">
        <button
          className="sidebar__add-button"
          onClick={() => handleAddClick()}
        >
          <span className="sidebar__add-button-span">+</span>Add task list
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
