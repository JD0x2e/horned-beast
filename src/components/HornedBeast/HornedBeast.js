import { useState } from "react";

export default function HornedBeast({ beastObj, title, imageUrl, description, changeModal }) {
  const [votes, setVotes] = useState(0);
  //const [name, mutation function] = useState(initial value);
  const voteBeasts = () => {
    setVotes(votes + 1);
  };

  return (
    <article className="article">
      <h2 className="h2">{title}</h2>
      <div className="img-container">
        <img
          className="img"
          title={title}
          alt={title}
          src={imageUrl}
          onClick={() => {
            voteBeasts();
            changeModal(beastObj);
          }}
        />
      </div>
      <p className="description">{description}</p>
      <span> ❤️ {votes}</span>
    </article>
  );
}
