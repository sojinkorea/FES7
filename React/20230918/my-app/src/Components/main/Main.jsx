import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <main>
        <form className="form">
          <p className="txt-wannabe">
            나는 <input type="text" placeholder="예)프로그래밍" /> 전문가가 될 것이다.
          </p>
          <p className="txt-hours">
            그래서 앞으로 매일 하루에 <input type="number" placeholder="예)5시간" />
            시간씩 훈련할 것이다.
          </p>
          <button className="btn-submit" type="submit">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </button>
        </form>
        <section className="section">
          <h2 className="a11y-hidden">결과 확인</h2>
          <p className="txt-wannabe">
            당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서
            <br />
            대략 <strong>1000</strong>일 이상 훈련하셔야 합니다!
          </p>
          <button type="button" className="btn-go">
            훈련하러 가기 GO! GO!
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
        </section>
      </main>
    </div>
  );
}
