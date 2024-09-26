import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white mr-4">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full max-w-[200px] bg-white bg-opacity-90">
          <ul className="flex flex-col items-start py-4 px-6">
            <li className="py-2 text-yellow-400">Home</li>
            <li className="py-2 text-gray-800">Reservation</li>
            <li className="py-2 text-gray-800">Menu</li>
            <li className="py-2 text-gray-800">Offers</li>
            <li className="py-2 text-gray-800">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
