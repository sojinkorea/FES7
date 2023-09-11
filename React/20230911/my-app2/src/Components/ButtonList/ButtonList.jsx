import React from "react";
import "./ButtonList.css";
import Button from "../Button/Button";

export default function ButtonList(props) {
  const button = ["좋아요! 😀", "정말 좋아요! 😁", "최고에요! 😆", "미쳤어요!! 🤪"];

  return (
    <ul className="list">
      {button.map((moodEl, index) => (
        <Button key={index} mood={moodEl} setCurrentMood={props.setCurrentMood} />
      ))}
    </ul>
  );
}
