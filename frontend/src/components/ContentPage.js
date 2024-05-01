import React, { useEffect, useState } from "react";
import "../css/ContentPage.css";
import Icon from "./Icon";
import axios from "axios";
import Task from "./Task";

function ContentPage({ taskListData }) {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${taskListData._id}`)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, [taskListData._id]);

  if (!tasks) {
    return null;
  }
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
            {tasks.map((taskData,index) => (
              <Task key={taskData._id} taskData={taskData} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
