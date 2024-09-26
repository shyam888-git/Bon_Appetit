import React from "react";
import Logo from "../../assets/Logo.png";
import Bistro from "../../assets/Bistro.png";
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4  text-white fixed top-0 left-0 right-0 z-50 navbar">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Bistro Logo" className="h-8" />
        <img src={Bistro} alt="Bistro Logo" className="h-8" />
      </div>
      <ul className=" md:flex space-x-8">
        <li className="hover:text-yellow-400 cursor-pointer home">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer nav_color">
          Reservation
        </li>
        <li className="hover:text-yellow-400 cursor-pointer nav_color">Menu</li>
        <li className="hover:text-yellow-400 cursor-pointer nav_color">
          Offers
        </li>
        <li className="hover:text-yellow-400 cursor-pointer nav_color">
          Contact
        </li>
      </ul>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
        Book a Table
      </button>
    </nav>
  );
};

export default Navbar;
