import React, { useState } from "react";


const GameBoard = ({onSelectSquare, board}) => {

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
      {board.map((row, index) => (
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
