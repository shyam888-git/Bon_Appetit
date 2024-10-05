import ReservationTitle from "./ReservationTitle";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="bg-[#FFF7EB] w-full py-16 flex flex-col items-center px-4">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between">
        <ReservationTitle />
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
