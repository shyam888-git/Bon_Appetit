const LargeScreenNavbar = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-8">
        <li className=" cursor-pointer text-[#F69625]">Home</li>
        <li className="cursor-pointer text-[#fff] hover:text-[#F69625]">
          RESERVATION
        </li>
        s
        <li className="cursor-pointer text-[#FFF] hover:text-[#F69625]">
          MENU
        </li>
        <li className="cursor-pointer text-[#FFF] hover:text-[#F69625]">
          OFFERS
        </li>
        <li className="cursor-pointer text-[#FFF] hover:text-[#F69625]">
          CONTACT
        </li>
      </ul>
    </>
  );
};

export default LargeScreenNavbar;
