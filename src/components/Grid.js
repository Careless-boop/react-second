import React, { useState } from "react";
import "../css/Grid.css";
import Sidebar from "./Sidebar";
import taskListsData from "../database";

function Grid() {
  const [taskLists,setTaskLists] = useState(taskListsData);

  function handleAddClick() {
    console.log("Pushed");
    const newTaskList = { img: "new.jpg", name: "New", tasks: [],isRemovable:true };
    setTaskLists([...taskLists,newTaskList])
    console.log("End");
  }

  return (
    <div className="main__grid">
      <Sidebar addTaskList={setTaskLists} taskListsData={taskLists}/>
      <div className="main__content">
        <img
          className="content__burger-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="lines icon"
        ></img>
        <div className="content__page">
          <h2 className="page__name">My Day</h2>
          <div className="page__tasks">
            <ul className="tasks">
              <li className="task">
                <div className="task__container">
                  <h4 className="task__name">Example task</h4>
                  <h5 className="task__parent-list">Tasks</h5>
                  <p className="task__date">17.04.2024 18:00</p>
                  <button className="task__important-mark"></button>
                </div>
              </li>
            </ul>
          </div>
          <div className="page__add-task">
            <button
              className="add-task__button"
              onClick={() => handleAddClick()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Grid;
