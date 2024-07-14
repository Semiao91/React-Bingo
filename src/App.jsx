import {Square} from "./component/Square.jsx";
import './App.css';
import {useEffect, useState} from "react";
import {checkWinningCondition} from "./util/CheckWinner.js";
import {centerFreeSpace, shuffleArray} from "./util/ShuffleArray.js";

function App() {

  const [winner, setWinner] = useState(false);
  const [selected, setSelected] = useState(Array.from(Array(25).fill(0)));
  const [bingoCard, setBingoCard] = useState([
    ["Finish a book", "Exercise for 30", "Cook a new recipe", "Call a friend", "Watch a new movie"],
    ["Learn a new word", "Meditate for 10 minutes", "desse", "Organize your workspace", "Try a new hobby"],
    ["Listen to a podcast", "Go for a walk", "FREE SPACE", "Read an article", "Write a journal entry"],
    ["Take a nap", "Do a random", "Try a new game", "Listen to music", "Watch a doc"],
    ["Do a puzzle", "Practice a new language", "Declutter a room", "Make a to-do list", "Write a letter"]
  ]);

  useEffect(() => {
    const array = [...bingoCard];
    shuffleArray(array);
    centerFreeSpace(array)
    setBingoCard(array);
  }, []);

  const handleClick = (rowIndex, colIndex) => {
    const newSelected = [...selected];
    newSelected[rowIndex * 5 + colIndex] = newSelected[rowIndex * 5 + colIndex] === 0 ? 1 : 0;
    setSelected(newSelected);
    setWinner(checkWinningCondition(newSelected))
  };

  return (
    <div className="bingo-card">
      {winner ? <p>Bingo</p> : null}
      {bingoCard.map((row, rowIndex) => (
        <div key={rowIndex} className="bingo-row">
          {row.map((text, colIndex) => (
            <Square key={rowIndex * 5 + colIndex} square={
              selected[rowIndex * 5 + colIndex] === 1
                ? "square selected"
                : "square"
            } onClick={() => handleClick(rowIndex, colIndex)}
                    text={text}/>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
