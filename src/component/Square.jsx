import { useState } from "react";

export const Square = ({ text, onClick, val, square, emoji, background }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(true);
    onClick();
    setTimeout(() => setFlip(false), 500);
  };

  return (
    <>
      <button
        className={`${square} ${background} ${flip ? 'flip ease-in-out' : ''} text-xs h-[75px] w-[65px] sm:h-[80px] sm:w-[80px] md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px] lg:my-0 flex items-center justify-center py-1 text-[#596579] transition-colors`}
        onClick={handleClick}
      >
        <span className={` ${emoji} ease-in-out lg:text-2xl sm:text-base font-semibold`}>
          {square.includes('selected') ? "⚽" : text}
        </span>
        {val}
      </button>
    </>
  );
};
