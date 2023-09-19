import { useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Modal from "./Components/modal/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="app">
      <Header />
      <Main setModalShow={setModalShow} />

      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}
export default App;
