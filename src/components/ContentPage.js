import React from "react";
import "../css/ContentPage.css";

function ContentPage() {
  return (
    <div className="main__content">
      <img
        className="content__burger-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        alt="lines icon"
      ></img>
      <div className="content__page">
        <h2 className="page__name">My Day</h2>
        <div className="page__tasks">
          <ul className="tasks">
            <li key="0" className="task">
              <div className="task__container">
                <h4 className="task__name">Example task</h4>
                <h5 className="task__parent-list">Tasks</h5>
                <p className="task__date">17.04.2024 18:00</p>
                <button className="task__important-mark"></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
