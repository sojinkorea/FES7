import ButtonList from "./Components/ButtonList/ButtonList";
import Display from "./Components/Display/Display";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("오늘의 기분");

  return (
    <div>
      <h2>오늘의 기분을 선택해주세요 😄</h2>
      <div>
        <ButtonList setCurrentMood={setCurrentMood} />
        <Display mood={currentMood} />
      </div>
    </div>
  );
}

export default App;
