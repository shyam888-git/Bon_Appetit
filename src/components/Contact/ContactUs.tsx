import LandingForm from "./ContactForm";

export const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="py-16 bg-[#FFF7EB] relative flex justify-around items-center">
        <div className="text-primary-gray-50">
          <p className=" text-xl text-[#F69625]  font-bold leading-3xl uppercase mb-4">
            Contact us
          </p>

          <p className="text-5xl text-[#F69625] font-semibold leading-[54px] mb-5">
            Let&apos;s Talk About <br />
            Your Information
          </p>
          <p className="text-xl text-[#000] font-medium leading-3xl">
            Call us for immediate support to this number
            <br />
            9-987-254-001
          </p>
        </div>
        <LandingForm />
      </div>
    </div>
  );
};
