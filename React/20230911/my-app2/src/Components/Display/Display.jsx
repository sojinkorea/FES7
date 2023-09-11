import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div className="container">
      <h3>{props.mood}</h3>
    </div>
  );
}
