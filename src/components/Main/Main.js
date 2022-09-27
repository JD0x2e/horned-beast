import HornedBeast from "./HornedBeast/HornedBeast";
import "./Main.css";

export default function Main({ beastData }) {
  return (
    <div className="main">
      {beastData.map((beast) => {
        return <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />;
      })}
    </div>
  );
}
