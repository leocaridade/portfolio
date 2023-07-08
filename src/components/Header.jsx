import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
    <div className="container flex items-center justify-between py-4">
      <span className="text-2xl font-bold">Leonardo Lindo</span>
      <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6H5v2h14V6zm0 5H5v2h14v-2zm0 5H5v2h14v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
    </div>
    </header>
  );
}

export default Header;