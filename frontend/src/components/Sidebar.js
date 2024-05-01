import React, { useState } from "react";
import "../css/Sidebar.css";
import TaskListItem from "./TaskListItem";
import TaskListPopUp from "./TaskListPopUp";

function Sidebar({ taskListsData, activeTaskList, setActiveTaskList }) {
  const [isPopOpen, setIsPopOpen] = useState(false);
  function handleAddClick() {
    setIsPopOpen((prev) => !prev);
  }
  function closeTaskListPopUp() {
    setIsPopOpen(false);
  }
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        {taskListsData.map((taskList, index) => (
          <TaskListItem
            key={index}
            id={index}
            taskList={taskList}
            changeActiveTaskList={() => setActiveTaskList(taskList)}
          />
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
      {isPopOpen ? (
        <TaskListPopUp
          taskLists={taskListsData}
          closePopUp={() => closeTaskListPopUp()}
        />
      ) : (
        ""
      )}
    </nav>
  );
}

export default Sidebar;
