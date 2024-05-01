import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Grid.css";
import Sidebar from "./Sidebar";
import ContentPage from "./ContentPage";

function Grid() {
  const [taskLists, setTaskLists] = useState([]);
  const [activeTaskList, setActiveTaskList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/taskLists")
      .then((response) => {
        const taskListsWithId = response.data;

        setTaskLists(taskListsWithId);
  
        if (taskListsWithId.length > 0) {
          setActiveTaskList(taskListsWithId[0]);
        }
      })
      .catch((error) => console.error(error));
  },[]);

  function changeActiveTaskList(taskList){
    setActiveTaskList(taskList);
  }

  if (!activeTaskList) {
    return null;
  }

  return (
    <div className="grid">
      <Sidebar
        addTaskList={setTaskLists}
        taskListsData={taskLists}
        activeTaskList={activeTaskList}
        setActiveTaskList={changeActiveTaskList}
      />
      <ContentPage taskListData={activeTaskList}/>
    </div>
  );
}

export default Grid;
