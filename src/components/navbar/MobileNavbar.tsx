import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import humburg from "../../assets/humBurg.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center justify-between md:gap-64 mobile_container">
      <button onClick={toggleMenu} className="text-white mr-4">
        {isOpen ? (
          <FaTimes size={24} color="#F69625" />
        ) : (
          <img src={humburg} alt="Menu Icon" width={24} height={24} />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full max-w-[250px] h-[300px] bg-white bg-opacity-90 z-50">
          <ul className="flex flex-col items-start py-4 px-6">
            <li className="py-2 text-yellow-400">HOME</li>
            <li className="py-2 text-gray-800">RESERVATION</li>
            <li className="py-2 text-gray-800">MENU</li>
            <li className="py-2 text-gray-800">OFFERS</li>
            <li className="py-2 text-gray-800">CONTACT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
