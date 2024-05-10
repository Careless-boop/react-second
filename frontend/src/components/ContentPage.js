import React, { useEffect, useState } from "react";
import "../css/ContentPage.css";
import Icon from "./Icon";
import axios from "axios";
import Task from "./Task";
import { ChromePicker } from "react-color";
import { Popper, ClickAwayListener } from "@mui/material";

function ContentPage({ taskListData, updateTaskListsData }) {
  const [tasks, setTasks] = useState(null);
  const [currentTaskListData, setCurrentTaskListData] = useState(taskListData);
  const [color, setColor] = useState(currentTaskListData.color);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${taskListData._id}`)
      .then((response) => {
        setTasks(response.data);
        setCurrentTaskListData(taskListData);
        setColor(taskListData.color);
      })
      .catch((error) => console.error(error));
  }, [taskListData]);

  useEffect(() => {
    if (!isMoreMenuOpen) {
      setIsColorPickerOpen(false);
    }
  }, [isMoreMenuOpen]);

  function handleChange(newColor) {
    setColor(newColor.hex);
  }

  function handleMoreClick(setter) {
    setter((prev) => !prev);
  }

  async function handleSetColor() {
    try {
      await axios.post(
        `http://localhost:5000/api/taskLists/${currentTaskListData._id}/color`,
        { color }
      );
      updateTaskListsData[1]({ ...currentTaskListData, color });
      setCurrentTaskListData({ ...currentTaskListData, color });
      console.log("Color updated successfully!");
    } catch (error) {
      console.error("Error updating color:", error);
    }
  }

  function deleteTaskList() {
    if (currentTaskListData.isRemovable) {
      axios
        .delete(
          `http://localhost:5000/api/taskLists/${currentTaskListData._id}`
        )
        .then(() => {
          updateTaskListsData[0](currentTaskListData._id);
        })
        .catch((error) => {
          console.error("Error deleting task list:", error);
        });
    }
  }

  const moreButtonRef = React.useRef(null);
  const changeColorOptionRef = React.useRef(null);

  if (!tasks) {
    return null;
  }
  return (
    <div
      key={taskListData._id}
      className="contentpage"
      style={{ backgroundColor: currentTaskListData.color }}
    >
      <img
        className="contentpage__burger-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        alt="lines icon"
      ></img>
      <div className="contentpage__container">
        <div className="contentpage__header">
          <Icon
            isEmoji={currentTaskListData.img.isEmoji}
            src={currentTaskListData.img.src}
            name={currentTaskListData.name}
          />
          <h3 className="contentpage__title">{currentTaskListData.name}</h3>
          <button
            className="contentpage__more-button"
            ref={moreButtonRef}
            onClick={() => handleMoreClick(setIsMoreMenuOpen)}
          >
            ⋮
          </button>

          <Popper
            open={isMoreMenuOpen}
            anchorEl={moreButtonRef.current}
            placement="right-start"
          >
            <ClickAwayListener
              onClickAway={() => handleMoreClick(setIsMoreMenuOpen)}
            >
              <ul className="more-button__menu">
                <p className="more-button__menu-item" onClick={deleteTaskList}>
                  Delete list
                </p>
                <p
                  className="more-button__menu-item"
                  ref={changeColorOptionRef}
                  onClick={() => handleMoreClick(setIsColorPickerOpen)}
                >
                  Change color
                </p>
                <Popper
                  open={isColorPickerOpen}
                  anchorEl={changeColorOptionRef.current}
                  placement="right-start"
                >
                  <div>
                    <ChromePicker color={color} onChange={handleChange} />
                    <button onClick={() => handleSetColor()}>Set</button>
                  </div>
                </Popper>
              </ul>
            </ClickAwayListener>
          </Popper>
        </div>
        <div className="contentpage__tasks">
          <ul className="tasks">
            {tasks.map((taskData, index) => (
              <Task key={taskData._id} taskData={taskData} />
            ))}
          </ul>
        </div>
      </div>
      <div className="contentpage__task-creator">
        <input className="contentpage__task-input"></input>
        <button className="contentpage__task-settings">
          <Icon isEmoji={true} src="⚙️" name="settings" />
        </button>
      </div>
    </div>
  );
}

export default ContentPage;
