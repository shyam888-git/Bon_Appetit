import ReservationForm from "./ReservationForm";

const ReservationMain = () => {
  return (
    <div className="bg-[#FFF7EB] w-full py-16">
      <div className="flex items-center justify-center my-8">
        <div className="flex-1 border-t border-gray-700 mx-4"></div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Make Your{" "}
          <span className="text-[#F69625] font-bold">Reservation</span>
        </h2>
        <div className="flex-1 border-t border-gray-700 mx-4"></div>
      </div>
      <ReservationForm />
    </div>
  );
};

export default ReservationMain;
