import {Square} from "./Square.jsx";
import overlayImage from '/bg.png'

export const Board = ({bingoCard, selected, handleClick}) => {
  return (
    <div
      className=" flex-col items-center flex justify-center min-h-screen bg-center bg-cover " style={{ backgroundImage: `url(${overlayImage})` }}  >
      <div className="grid grid-rows-5 grid-cols-5 sm:h-[600px] sm:w-[600px] lg:h-[817px] lg:w-[816px] rounded-2xl border-solid border-8 border-[#8772fd]">
        {bingoCard.map((row, rowIndex) => (
          <div key={rowIndex} className="bingo-row">
            {row.map((text, colIndex) => (
              <Square key={rowIndex * 5 + colIndex} square={
                selected[rowIndex * 5 + colIndex] === 1
                  ? "square selected" : "square"
              } onClick={() => handleClick(rowIndex, colIndex)}
                      background={(rowIndex * 5 + colIndex) % 2 === 0 ? 'bg-[#ffffff]' : 'bg-[#e2ebff]'} text={text}
                      emoji={text === "⚽" ? "text-5xl lg:text-7xl md:text-3xl" : null}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}