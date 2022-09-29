import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import beastJson from "./data.json";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from "react";

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const [activeBeast, setActiveBeast] = useState({});
  const [beastData, setBeastData] = useState(beastJson);

  const changeModal = (beast = {}) => {
    setModalShow(!modalShow);
    setActiveBeast(beast);
  };

  const handleFilter = (event) => {
    //parseInt turns a string into a number
    const numHorns = parseInt(event.target.value);
    const myFilteredBeasts = beastJson.filter((beast) => beast.horns === numHorns);

    // show all beasts (if statement)
    if (event.target.value < 1) {
      setBeastData(beastJson);
    } else {
      setBeastData(myFilteredBeasts);
    }
  };

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main beastData={beastData} changeModal={changeModal} />
      {modalShow && <SelectedBeast changeModal={changeModal} activeBeast={activeBeast} />}
      <Footer />
    </div>
  );
}
