import React, { useState } from "react";
import "../css/TaskListItem.css";
import Icon from "./Icon";

function TaskListItem({ taskList, changeActiveTaskList }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="tasklistitem"
      onClick={changeActiveTaskList}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tasklistitem-container">
        <div>
          <Icon
            isEmoji={taskList.img.isEmoji}
            src={taskList.img.src}
            name={taskList.name}
          />
          <h3 className="tasklistitem-name">{taskList.name}</h3>
        </div>
        <button className={isHovered?"tasklistitem__delete-button--opened":"tasklistitem__delete-button"}>X</button>
      </div>
    </li>
  );
}

export default TaskListItem;
