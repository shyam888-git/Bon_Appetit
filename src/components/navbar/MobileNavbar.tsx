import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import humburg from "../../assets/humBurg.png";

const navLink = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/reservation",
    name: "RESERVATION",
  },
  {
    path: "/menu",
    name: "MENU",
  },

  // {
  //   path: "/offers",
  //   name: "OFFERS",
  // },
  {
    path: "/contact",
    name: "CONTACT",
  },
];

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
        <div className="absolute top-full left-0 w-full max-w-[250px] h-[225px] bg-white bg-opacity-90 z-50">
          <ul className="flex flex-col items-start py-4 px-6">
            {navLink.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer text-[#000] font-[18px] hover:text-[#F69625]"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
