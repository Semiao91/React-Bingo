export const Square = ({text, onClick, val, square}) => {
  return (
    <button
      className={`${square} h-[75px] w-[65px] sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px] my-6  bg-gradient-to-b flex items-center justify-center border border-gray-300 rounded-md px-2 sm:px-4 py-1 sm:py-2 transition-colors`}
      onClick={onClick}
      style={{
        background: square.includes('selected')
          ? 'green'
          : 'linear-gradient(to bottom, #0928c8, #001d8e)',
        color: 'white',
      }}
    >
      <span className="text-xs sm:text-sm font-semibold">{text}</span>
      {val}
    </button>
  );
};
