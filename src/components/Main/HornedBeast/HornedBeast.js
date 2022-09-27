import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description }) {
  const [votes, setVotes] = useState(0);

  const voteBeasts = () => {
    setVotes(votes + 1);
  };

  return (
    <article className="article">
      <h2>{title}</h2>
      <div className="img-container">
        <img title={title} alt={title} src={imageUrl} onClick={voteBeasts} />
      </div>
      <p>{description}</p>
      <span> ❤️ {votes}</span>
    </article>
  );
}
