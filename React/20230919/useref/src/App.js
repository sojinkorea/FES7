import React, { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const countThree = useRef(0);
  let countFour = 0;

  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const handleCountUpThree = () => {
    countThree.current += 1;
  };
  const handleCountUpFour = () => {
    countFour += 1;
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
