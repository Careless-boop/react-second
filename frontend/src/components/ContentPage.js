import React from "react";
import "../css/ContentPage.css";
import Icon from "./Icon";

function ContentPage({ taskListData }) {
  return (
    <div className="contentpage">
      <img
        className="contentpage__burger-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        alt="lines icon"
      ></img>
      <div className="contentpage__container">
        <div className="contentpage__header">
          <Icon
            isEmoji={taskListData.img.isEmoji}
            src={taskListData.img.src}
            name={taskListData.name}
          />
          <h3 className="contentpage__title">{taskListData.name}</h3>
        </div>
        <div className="contentpage__tasks">
          <ul className="tasks">
            {taskListData.tasks.map((task, index) => (
              <li key={index} className="task">
                <div className="task__container">
                  <h4 className="task__name">{task.name}</h4>
                  <h5 className="task__parent-list">{taskListData.name}</h5>
                  <p className="task__date">
                    {task.date.day}.{task.date.month}.{task.date.year}{" "}
                    {task.date.hour}:{task.date.minute}
                  </p>
                  <button className="task__important-mark"></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
