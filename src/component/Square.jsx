export const Square = ({text, onClick, val, square, emoji, background}) => {
  return (
    <button
      className={`${square} ${background} h-[75px] w-[65px] sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px] lg:h-[160px] lg:w-[160px] my-6 lg:my-0 flex items-center justify-center px-2 sm:px-4 py-1 text-[#596579] sm:py-2 transition-colors`}
      onClick={onClick}
    >
      <span className={` ${emoji} lg:text-2xl sm:text-sm font-semibold`}>{square.includes('selected') ? "⚽" : text}</span>
      {val}
    </button>
  );
};
