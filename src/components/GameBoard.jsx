import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquare, turns}) => {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        // object destructuring.
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//         // update in immutable way - therefore copy.
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;
//     });
//     onSelectSquare();
//   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(index, colIndex)} disabled={playerSymbol !== null } >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
