import React from "react";
import titleImg from "../../images/title.png";
import subTitleImg from "../../images/txt_subtitle.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="title">
          <img src={titleImg} alt="1만 시간의 법칙" className="img-title" />
        </h1>
        <img src={subTitleImg} alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." className="img-subtitle" />
        <p className="txt-info">
          <strong className="txt-info-strong">1만 시간의 법칙</strong>은<br />
          어떤 분야의 전문가가 되기 위해서는
          <br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </header>
    </div>
  );
}
