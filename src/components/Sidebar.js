import React from "react";
import "../css/Sidebar.css";

function Sidebar({addTaskList,taskListsData}) {
  function handleAddClick() {
    console.log("Pushed");
    const newTaskList = { img: "new.jpg", name: "New", tasks: [],isRemovable:true };
    addTaskList([...taskListsData,newTaskList])
    console.log("End");
  }
  return (
    <nav className="main__nav">
      <ul className="nav__list">
        {taskListsData.map((taskList, index) => (
          <li key={index} className="list__item">
            <div className="list__item-container">
              <h3 className="list__item-name">{taskList.name}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="nav__add-tasklist">
        <button className="add-tasklist-button" onClick={()=>handleAddClick()}>Add task list</button>
      </div>
    </nav>
  );
}
export default Sidebar;
