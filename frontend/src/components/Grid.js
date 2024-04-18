import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Grid.css";
import Sidebar from "./Sidebar";
import ContentPage from "./ContentPage";
import taskListsData from "../database/taskListsDocument";

function Grid() {
  const [taskLists, setTaskLists] = useState([]);
  const [activeTaskList, setActiveTaskList] = useState(taskLists[0]);

  useEffect(() => {
    axios.get("/api/taskLists")
      .then(response => setTaskLists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid">
      <Sidebar
        addTaskList={setTaskLists}
        taskListsData={taskLists}
        activeTaskList={activeTaskList}
        setActiveTaskList={setActiveTaskList}
      />
    </div>
  );
}

export default Grid;
