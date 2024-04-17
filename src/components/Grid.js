import React, { useState } from "react";
import "../css/Grid.css";
import Sidebar from "./Sidebar";
import ContentPage from "./ContentPage";
import taskListsData from "../database";

function Grid() {
  const [taskLists, setTaskLists] = useState(taskListsData);

  return (
    <div className="main__grid">
      <Sidebar addTaskList={setTaskLists} taskListsData={taskLists} />
      <ContentPage />
    </div>
  );
}

export default Grid;
