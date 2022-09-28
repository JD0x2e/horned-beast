import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import beastData from "./data.json";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from "react";

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const [activeBeast, setActiveBeast] = useState({});

  const changeModal = (beast) => {
    setModalShow(!modalShow);
    setActiveBeast(beast);
  };

  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} changeModal={changeModal} />
      {modalShow && <SelectedBeast changeModal={changeModal} activeBeast={activeBeast} />}
      <Footer />
    </div>
  );
}
