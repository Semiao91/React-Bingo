export const NavBar = () => {
  return (
    <nav className="bg-[#0052cc] text-white flex items-center p-4">
      <div className="flex items-center space-x-4">
        <img src="/cup.png" alt="Logo" className="h-12 w-12" />
        <div className="flex flex-col">
          <span className="font-bold">EURO2024</span>
          <span className="text-sm">GERMANY</span>
        </div>
      </div>
      <div className="flex items-center space-x-6 ml-8">
        <a href="#" className="hover:underline">
          Bingo
        </a>
        <a href="#" className="bg-yellow-500 text-black px-3 py-1 rounded-full">
          Groups
        </a>
        <a href="#" className="hover:underline">
          Video <span className="text-xs">&#9660;</span>
        </a>
        <a href="#" className="hover:underline">
          Stats <span className="text-xs">&#9660;</span>
        </a>
        <a href="#" className="hover:underline">
          Gaming <span className="text-xs">&#9660;</span>
        </a>
        <a href="#" className="hover:underline">
          Teams
        </a>
        <a href="#" className="hover:underline">
          News
        </a>
        <a href="#" className="hover:underline">
          Tickets
        </a>
        <a href="#" className="hover:underline">
          Event guide <span className="text-xs">&#9660;</span>
        </a>
        <a href="#" className="hover:underline">
          History <span className="text-xs">&#9660;</span>
        </a>
        <a href="#" className="hover:underline">
          More <span className="text-xs">&#9660;</span>
        </a>
      </div>
    </nav>
  )
}