import React from "react";

export default function SelectedBeast({ changeModal, activeBeast }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <img className="modal-img" src={activeBeast.image_url} title={activeBeast.title} alt={activeBeast.title} />
        <p className="modal-text">{activeBeast.description}</p>
        <button className="modal-button" onClick={changeModal}>
          X
        </button>
      </div>
    </div>
  );
}
