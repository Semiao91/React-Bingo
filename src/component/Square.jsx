export const Square = ({text, onClick, square, val}) => {
  return (
    <button className={square} onClick={onClick}>{text} {val}</button>
  )
}