import ReservationForm from "./ReservationForm";

const ReservationMain = () => {
  return (
    <div className="bg-[#FFF] w-full py-16 ">
      {/* Wrapping all the borders and text in a column */}
      <div className="bg-[#FFF7EB]  ">
        <div className="w-full flex items-center justify-center gap-4 px-2 py-4">
          <div className="flex-grow h-[2px] bg-[#402E32] relative">
            <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-[rgb(64,46,50)]" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl flex-wrap whitespace-nowrap">
            Make Your <span className="text-orange-500">Reservation</span>
          </h2>
          <div className="flex-grow h-[2px] bg-[#402E32] relative">
            <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-[#402E32]" />
          </div>
        </div>
        <div className="py-2">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default ReservationMain;
