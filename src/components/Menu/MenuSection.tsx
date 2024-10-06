import Menu from "./Menu";

const ReservationMain = () => {
  return (
    <div className="bg-[#FFF7EB] w-full py-16 ">
      {/* Wrapping all the borders and text in a column */}
      <div className="flex justify-between items-center space-x-4 my-8 ">
        {/* Upper row of borders */}
        <div className="flex-1 grid justify-start items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[1000px]"
            height="2"
            viewBox="0 0 678 2"
            fill="none"
          >
            <path d="M-155 1H677.5" stroke="#402E32" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[1000px]"
            height="2"
            viewBox="0 0 678 2"
            fill="none"
          >
            <path d="M-155 1H677.5" stroke="#402E32" strokeWidth="2" />
          </svg>
        </div>

        {/* Title in the middle */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 tracking-wider whitespace-nowrap">
          Our <span className="text-[#F69625] font-bold">Menu </span>
        </h2>

        {/* Lower row of borders */}
        <div className="flex-1 grid justify-end items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-full"
            height="2"
            viewBox="0 0 678 2"
            fill="none"
          >
            <path d="M-155 1H677.5" stroke="#402E32" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-full"
            height="2"
            viewBox="0 0 678 2"
            fill="none"
          >
            <path d="M-155 1H677.5" stroke="#402E32" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Reservation form */}
      <Menu />
    </div>
  );
};

export default ReservationMain;
