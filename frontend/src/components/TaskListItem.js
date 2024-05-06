import React from "react";
import "../css/TaskListItem.css";
import Icon from "./Icon";

function TaskListItem({ taskList, changeActiveTaskList }) {

  return (
    <li
      className="tasklistitem"
      onClick={changeActiveTaskList}
    >
      <div className="tasklistitem-container">
        <div className="tasklistitem-title">
          <Icon
            isEmoji={taskList.img.isEmoji}
            src={taskList.img.src}
            name={taskList.name}
          />
          <h3 className="tasklistitem-name">{taskList.name}</h3>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
