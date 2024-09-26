import React, { useState, useEffect } from "react";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import Bistra from "../../assets/Bistro.png";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-32 text-white fixed top-0 left-0 right-0 z-50 navbar">
      <div className="flex items-center space-x-4">
        {isMobile && <MobileNavbar />}
        <img src={Logo} alt="Bistro Logo" className="h-8" />
        <img src={Bistra} alt="Bistro" className="h-8" />
      </div>
      <LargeScreenNavbar />
    </nav>
  );
};

export default Navbar;
