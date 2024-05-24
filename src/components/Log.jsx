import React from "react";

export const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, ind) => (
        <li key={ind}>
          <h3>{turn.player} selected {turn.square.row} {turn.square.col}</h3>
        </li>
      ))}
    </ol>
  );
};
