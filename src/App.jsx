import {useEffect, useState} from "react";
import {checkWinningCondition} from "./util/CheckWinner.js";
import {centerFreeSpace, shuffleArray} from "./util/ShuffleArray.js";
import {Board} from "./component/Board.jsx";
import {Firework} from "./component/Firework.jsx";

function App() {

  const [winner, setWinner] = useState(false);
  const [selected, setSelected] = useState(Array.from(Array(25).fill(0)));
  const [bingoCard, setBingoCard] = useState([
    ["Goal scored", "Yellow card", "Red card", "Offside", "Penalty awarded"],
    ["Corner kick", "Free kick", "Substitution", "Goalkeeper save", "Handball"],
    ["Foul", "Injury timeout", "⚽", "Header goal", "VAR review"],
    ["Missed penalty", "Own goal", "Assist", "Throw-in", "Shot on target"],
    ["Defensive clearance", "Dribble past player", "Cross into box", "Long-range goal", "Goal celebration"]
  ]);


  useEffect(() => {
    const array = [...bingoCard];
    shuffleArray(array);
    centerFreeSpace(array);
    setBingoCard(array);
  }, []);

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        setWinner(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [winner]);


  const handleClick = (rowIndex, colIndex) => {
    const newSelected = [...selected];
    newSelected[rowIndex * 5 + colIndex] = newSelected[rowIndex * 5 + colIndex] === 0 ? 1 : 0;
    setSelected(newSelected);
    setWinner(checkWinningCondition(newSelected))
  };

  return (
    <>
      {winner && <img
        className={`z-10 absolute left-0 right-0 top-[150px] lg:top-[280px] md:top-[280px] sm:top-[235px] ml-auto w-[100px] md:w-[200px] sm:w-[150px] mr-auto ${winner ? 'fade-in' : 'fade-out'}`}
        src={'/goal.png'}
        alt="logo"
      />}
      <Firework celebrate={winner}/>
      <Board handleClick={handleClick} bingoCard={bingoCard} winner={winner} selected={selected}/>
    </>
  )
}

export default App
