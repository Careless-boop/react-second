import React from "react";
import "../css/Icon.css";

function Icon({ isEmoji, src, name, size = 1.5 }) {
  const stylesImg = {
    width: size+"rem",
    height: size+"rem"
  }
  const stylesEmoji={
    fontSize: `${size-0.4}rem`
  }

  if (isEmoji) {
    return (
      <span
      style={stylesEmoji}
        className="icon-emoji"
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
        style={stylesImg}
        className="icon"
        src={"img/" + src}
        alt={name + " icon"}
      ></img>
    );
  }
}

export default Icon;
