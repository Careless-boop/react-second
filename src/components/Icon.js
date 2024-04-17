import React from "react";
import "../css/Icon.css";

function Icon({ isEmoji, src, name }) {
  if (isEmoji) {
    return (
      <span
        className="list__item-icon-emoji"
        role="img"
        aria-label={name ? name : ""}
        aria-hidden={name ? "false" : "true"}
      >
        {src}
      </span>
    );
  } else {
    return (
      <img
        className="list__item-icon"
        src={"img/" + src}
        alt={name + " icon"}
      ></img>
    );
  }
}

export default Icon;
