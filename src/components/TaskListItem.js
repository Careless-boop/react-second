import React from "react";
import "../css/TaskListItem.css"
import Icon from "./Icon";

function TaskListItem({id,taskList}){
  return(
    <li key={id} className="list__item">
            <div className="list__item-container">
              <Icon isEmoji={taskList.img.isEmoji} src={taskList.img.src} name={taskList.name}/>
              <h3 className="list__item-name">{taskList.name}</h3>
            </div>
          </li>
  )
}

export default TaskListItem;