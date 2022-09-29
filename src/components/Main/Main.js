import HornedBeast from "../HornedBeast/HornedBeast";
import "./Main.css";

export default function Main({ beastData, changeModal }) {
  return (
    <main className="main">
      {beastData.map((beast, index) => {
        return (
          <div key={index}>
            <HornedBeast
              beastObj={beast}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              changeModal={changeModal}
            />
          </div>
        );
      })}
    </main>
  );
}
