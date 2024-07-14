import {useEffect, useState} from "react";
import {checkWinningCondition} from "./util/CheckWinner.js";
import {centerFreeSpace, shuffleArray} from "./util/ShuffleArray.js";
import {NavBar} from "./component/NavBar.jsx";
import {Footer} from "./component/Footer.jsx";
import {Board} from "./component/Board.jsx";
import {Celebration} from "./component/Celebration.jsx";

function App() {

  const [winner, setWinner] = useState(false);
  const [selected, setSelected] = useState(Array.from(Array(25).fill(0)));
  const [bingoCard, setBingoCard] = useState([
    ["Goal scored", "Yellow card", "Red card", "Offside", "Penalty awarded"],
    ["Corner kick", "Free kick", "Substitution", "Goalkeeper save", "Handball"],
    ["Foul", "Injury timeout", "FREE SPACE", "Header goal", "VAR review"],
    ["Missed penalty", "Own goal", "Assist", "Throw-in", "Shot on target"],
    ["Defensive clearance", "Dribble past player", "Cross into box", "Long-range goal", "Goal celebration"]
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
    <>
      <NavBar/>
      <Celebration celebrate={winner} />
      <Board handleClick={handleClick} bingoCard={bingoCard} winner={winner} selected={selected}/>
      <Footer/>
    </>
  )
}

export default App
