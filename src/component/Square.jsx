export const Square = ({ text, onClick, val, square }) => {
  return (
    <button
      className={`${square} bg-gradient-to-b flex items-center justify-center border border-gray-300 bg-white text-black rounded-md px-4 py-2 transition-colors`}
      onClick={onClick}
      style={{
        width: '100px',
        height: '100px',
        background: square.includes('selected')
          ? 'lightgreen'
          : 'linear-gradient(to bottom, #0928c8, #001d8e)',
        color: 'white',
      }}
    >
      <span className="text-sm font-semibold">{text}</span>
      {val}
    </button>
  );
};
