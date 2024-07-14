

export const Square = ({ text, onClick, val, square }) => {
  return (
    <button
      className={`${square} flex items-center justify-center border border-gray-300 bg-white text-black rounded-md px-4 py-2 hover:bg-gray-200 transition-colors`}
      onClick={onClick}
      style={{ width: '100px', height: '100px' }}
    >
      <span className="text-sm">{text}</span>
      {val}
    </button>
  );
};
