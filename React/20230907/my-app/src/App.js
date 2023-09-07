import "./App.css";

function App() {
  // js 주석
  /** 여러줄 주석 */
  const name = "소진";
  const style = { backgroundColor: "gold", color: "white" };
  function 함수() {
    return "함수";
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return (
    <div>
      {/* JSX 주석 */}

      <div>
        <h1 className="newClass">hi {name}</h1>
        <h1 className="newClass" style={style}>
          hi {name}
        </h1>
        <h2>hi {함수()}</h2>
        <h2>hi {함수() ? "success" : "error"}</h2>
        <input type="text" maxLength={false} disabled />
        <input type="text" style={{ backgroundColor: "tomato" }} />
      </div>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ color: "tomato" }}>년 : {year}</h1>
        <h2>
          월/일 : {month}/{date}
        </h2>
        <h3>
          시간 : {hours}시 {minutes}분 {seconds}초
        </h3>
      </div>
    </div>
  );
}

export default App;
