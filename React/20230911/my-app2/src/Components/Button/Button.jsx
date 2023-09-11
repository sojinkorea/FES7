import React from "react";
import "./Button.css";

export default function Button(props) {
  const btnClick = () => {
    props.setCurrentMood(props.mood);
  };

  return (
    <li>
      <button onClick={btnClick} className="btn">
        기분이: {props.mood}
      </button>
    </li>
  );
}
