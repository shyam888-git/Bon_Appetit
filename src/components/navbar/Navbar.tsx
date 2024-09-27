import { useState, useEffect } from "react";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import Bistra from "../../assets/Bistro.png";
import Logo from "../../assets/Logo.png";
import "./styles.css";
import Zerla from "../../assets/Zarla.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between py-4 px-4  text-white fixed top-0 left-0 right-0 z-50 navbar">
      <div className="flex items-center space-x-4">
        {isMobile && <MobileNavbar />}
        <div className="lg:flex items-center space-x-4 hidden logo_container">
          <img src={Logo} alt="Bistro Logo" className="h-8" />
          <img src={Bistra} alt="Bistro" className="h-8" />
        </div>
      </div>
      <LargeScreenNavbar />
      <div className="md:hidden ">
        <img src={Zerla} alt="Zerla Logo" className="h-8" />
      </div>
      <button className="bg-[#F69625] text-[#FFF] px-4 py-2 rounded-lg hover:bg-[#F69625]">
        Book a Table
      </button>
    </nav>
  );
};

export default Navbar;
