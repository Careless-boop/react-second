import React from "react";
import "../css/TaskListItem.css";
import Icon from "./Icon";

function TaskListItem({ id, taskList }) {
  return (
    <li key={id} className="tasklistitem">
      <div className="tasklistitem-container">
        <Icon
          isEmoji={taskList.img.isEmoji}
          src={taskList.img.src}
          name={taskList.name}
        />
        <h3 className="tasklistitem-name">{taskList.name}</h3>
      </div>
    </li>
  );
}

export default TaskListItem;
