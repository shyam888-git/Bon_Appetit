import LandingForm from "./ContactForm";

export const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="py-16 bg-[#FFF7EB] relative lg:flex lg:justify-around lg:items-center grid gap-10 justify-center items-center px-4 lg:px-0">
        {/* Contact Info Section */}
        <div className="text-primary-gray-50 text-center lg:text-left">
          <p className="text-lg lg:text-xl text-[#F69625] font-bold uppercase mt-12 mb-4">
            Contact us
          </p>
          <p className="text-4xl lg:text-5xl text-[#F69625] font-semibold leading-tight mb-5">
            Let&apos;s Talk About <br className="hidden lg:block" />
            Your Information
          </p>
          <p className="text-base lg:text-xl text-[#000] font-medium mb-5">
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
