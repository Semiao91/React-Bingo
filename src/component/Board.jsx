import {Square} from "./Square.jsx";

export const Board = ({winner, bingoCard, selected, handleClick}) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-900">
      {winner ? <p>Bingo</p> : null}
      <div className="grid grid-rows-5 grid-cols-5 gap-2" style={{width: '500px', height: '500px'}}>
        {bingoCard.map((row, rowIndex) => (
          <div key={rowIndex} className="bingo-row">
            {row.map((text, colIndex) => (
              <Square key={rowIndex * 5 + colIndex} square={
                selected[rowIndex * 5 + colIndex] === 1
                  ? "bg-green-500" : "bg-white"
              } onClick={() => handleClick(rowIndex, colIndex)}
                      text={text}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}