import {Square} from "./Square.jsx";

export const Board = ({bingoCard, selected, handleClick}) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-8 bg-gradient-to-b from-blue-500 to-indigo-900">
      <div className="grid grid-rows-5 grid-cols-5 gap-2 sm:h-[600px] sm:w-[600px] lg:h-[500px] lg:w-[500px]">
        {bingoCard.map((row, rowIndex) => (
          <div key={rowIndex} className="bingo-row">
            {row.map((text, colIndex) => (
              <Square key={rowIndex * 5 + colIndex} square={
                selected[rowIndex * 5 + colIndex] === 1
                  ? "square selected" : "square"
              } onClick={() => handleClick(rowIndex, colIndex)}
                      text={text} emoji={text === "⚽" ? "lg:text-3xl md:text-3xl" : null}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}