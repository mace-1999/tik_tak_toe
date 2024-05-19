import React from "react";
import { useState } from "react";

// USED TERNARY EXPRESSION TO CONDITIONALLY RENDER THE HTML.

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClicked() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {

    setPlayerName(event.target.value);

  }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange}/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClicked}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
