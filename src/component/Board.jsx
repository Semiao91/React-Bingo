import {Square} from "./Square.jsx";
import overlayImage from '/bg.png'
import headder from '/headder.png';

export const Board = ({bingoCard, selected, handleClick}) => {
  return (
    <div
      className="flex-col items-center flex justify-center pb-8 min-h-screen bg-center bg-cover "
      style={{backgroundImage: `url(${overlayImage})`}}>
      <img className="lg:w-[500px] md:w-[500px] w-[300px]" alt="title" src={headder}/>
      <div className="rounded-2xl border-solid drop-shadow-2xl border-4 border-[#4713ab]">
        <div className="rounded-xl pb-6 " style={{
          background: 'linear-gradient(0deg, rgba(53,106,224,1) 0%, rgba(4,4,10,1) 10%)',
        }}>
          <div
            className="grid grid-rows-5 grid-cols-5 h-[395px] sm:h-[420px] sm:w-[420px] md:h-[620px] md:w-[620px] lg:h-[820px] lg:w-[820px] rounded-2xl border-[10px] border-[#8772fd]">
            {bingoCard.map((row, rowIndex) => (
              <div key={rowIndex} className="bingo-row">
                {row.map((text, colIndex) => (
                  <Square key={rowIndex * 5 + colIndex} square={
                    selected[rowIndex * 5 + colIndex] === 1
                      ? "square selected" : "square"
                  } onClick={() => handleClick(rowIndex, colIndex)}
                          background={(rowIndex * 5 + colIndex) % 2 === 0 ? 'bg-[#ffffff]' : 'bg-[#e2ebff]'} text={text}
                          emoji={text === "⚽" ? "text-sm lg:text-7xl md:text-3xl" : null}/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}