const LargeScreenNavbar = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-8">
        <li className="text-yellow-400 cursor-pointer">Home</li>
        <li className="cursor-pointer text-gray-300 hover:text-yellow-400">
          Reservation
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-yellow-400">
          Menu
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-yellow-400">
          Offers
        </li>
        <li className="cursor-pointer text-gray-300 hover:text-yellow-400">
          Contact
        </li>
      </ul>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
        Book a Table
      </button>
    </>
  );
};

export default LargeScreenNavbar;
