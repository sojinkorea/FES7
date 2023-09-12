import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // state 함수가 실행되면 state가 변경된다. state가 변경되면 컴포넌트가 다시 렌더링 되는데, 이때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행됩니다.

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
