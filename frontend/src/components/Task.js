import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

function Task({ taskData }) {
  const [parentListName, setParentListName] = useState("");

  useEffect(() => {
    async function getParentList() {
      try {
        const response = await axios.get(`http://localhost:5000/api/taskLists/${taskData.taskLists[0]}`);
        setParentListName(response.data[0].name);
      } catch (error) {
        console.error(error);
      }
    }
    getParentList();
  }, [taskData.taskLists]);

  return (
    <li className="task">
      <div className="task__container">
        <h4 className="task__name">{taskData.name}</h4>
        <h5 className="task__parent-list">{parentListName}</h5>
        <p className="task__date">
          {taskData.date.day}.{taskData.date.month}.{taskData.date.year}{" "}
          {taskData.date.hour}:{taskData.date.minute}
        </p>
        <button className="task__important-mark"></button>
      </div>
    </li>
  );
}

export default Task;
