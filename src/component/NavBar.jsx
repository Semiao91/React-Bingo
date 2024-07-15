import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0052cc] text-white flex justify-between items-center p-6">
      <div className="flex items-center space-x-4">
        <img src="/cup.png" alt="Logo" className="h-12 w-12" />
        <div className="flex flex-col">
          <span className="font-bold">EURO2024</span>
          <span className="text-sm">GERMANY</span>
        </div>
      </div>
      <div className="flex space-x-6">
        <a href="/" className="bg-yellow-500 text-black px-3 py-2 rounded-md">
          New Bingo
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="https://www.uefa.com/euro2024/fixtures-results/#/d/2024-07-14" className="hover:underline">
            Matches
          </a>
          <a href="https://www.uefa.com/euro2024/teams/" className="hover:underline">
            Teams
          </a>
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 right-0 w-full bg-[#0052cc] md:hidden">
          <a
            href="https://www.uefa.com/euro2024/fixtures-results/#/d/2024-07-14"
            className="block text-center py-2 hover:underline"
            onClick={toggleMenu}
          >
            Matches
          </a>
          <a
            href="https://www.uefa.com/euro2024/teams/"
            className="block text-center py-2 hover:underline"
            onClick={toggleMenu}
          >
            Teams
          </a>
        </div>
      )}
    </nav>
  );
};
