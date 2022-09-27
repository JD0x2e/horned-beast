import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import beastData from "./data.json";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} />
      <Footer />
    </div>
  );
}
