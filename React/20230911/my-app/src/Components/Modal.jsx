import React from "react";
import "./Modal.css";

export default function Modal({ setModalShow }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>환영합니다!</h2>
        <button onClick={() => setModalShow(false)}>닫기</button>
      </div>
    </div>
  );
}
