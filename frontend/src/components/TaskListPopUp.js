import React, { useState, useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import "../css/TaskListPopUp.css";
import Icon from "./Icon";
import Popper from "@mui/material/Popper";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import axios from "axios";

function TaskListPopUp({ taskLists, closePopUp, isOpen }) {
  const [isNameTaken, setIsNameTaken] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [taskList, setTaskList] = useState({
    name: "",
    img: { src: "🫥", isEmoji: true },
    isRemovable: true,
  });
  const anchorRef = React.useRef(null);

  useEffect(() => {
    function handleEscPress(event) {
      if (event.key === "Escape") {
        closePopUp();
      }
    }
    document.addEventListener("keydown", handleEscPress);
    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [closePopUp]);

  function OpenPicker() {
    setIsPickerOpen((prev) => !prev);
  }
  function ChooseEmoji(emoji) {
    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      img: { src: emoji.native, isEmoji: true },
    }));
    setIsPickerOpen((prev) => !prev);
  }
  function handleInputChange(event) {
    const { name, value } = event.target;

    const taken = taskLists.some((taskList) => taskList.name.includes(value));
    setIsNameTaken(taken);

    setTaskList((prevTaskList) => ({
      ...prevTaskList,
      [name]: value,
    }));
  }
  async function handleSubmit() {
    if (!isNameTaken) {
      try {
        await axios.post("http://localhost:5000/api/taskLists", taskList);
        console.log("Form submitted!");
        return 0;
      } catch (error) {
        console.error("Error creating task list:", error);
        throw error;
      }
    }
  }

  return (
    <div className="tasklist-popup">
      <ClickAwayListener onClickAway={closePopUp}>
        <div className="tasklist-popup__container">
          <h3 className="tasklist-popup__title">Create task list</h3>
          <form className="tasklist-popup__form">
            <div className="form__item">
              <label className="tasklist-popup__label">Name:</label>
              <input
                id="taskListNameInput"
                type="text"
                name="name"
                value={taskList.name}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className="form__item-inline">
              <label className="tasklist-popup__label">Icon:</label>
              <div
                className="icon-wrapper"
                ref={anchorRef}
                onClick={() => OpenPicker()}
              >
                <Icon
                  isEmoji={true}
                  src={taskList.img.src}
                  name="New list icon"
                  size="2.5"
                />
              </div>
              <Popper
                open={isPickerOpen}
                anchorEl={anchorRef.current}
                placement="right-start"
              >
                <Picker data={data} onEmojiSelect={ChooseEmoji} theme="light" />
              </Popper>
            </div>
            <button className="form__item" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </ClickAwayListener>
    </div>
  );
}
export default TaskListPopUp;
