import facebook from "@/assets/SocialMedia/Facebook.png";
import instagram from "@/assets/SocialMedia/Instagram (1).png";
import twitter from "@/assets/SocialMedia/TwitterX.png";
import Zarla from "@/assets/SocialMedia/Zarla.png";
import ZarlaIcon from "@/assets/SocialMedia/Zarla2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid w-full">
      <div className="grid flex-wrap justify-center items-center xl:flex gap-8 lg:gap-16 px-4">
        <div className="grid justify-center items-center text-center mb-6">
          <img src={ZarlaIcon} alt="zarlaicon" className="mx-auto" />
          <img src={Zarla} alt="zarla" className="mx-auto mt-2" />
        </div>

        <div className="grid justify-center items-center text-center mb-6 lg:gap-10">
          <div className="grid mb-4">
            <h2 className="text-[#000] text-[18px] lg:text-[20px] font-bold">
              ABOUT RESTAURANT
            </h2>
            <div className="w-full max-w-[200px] mx-auto">
              <span>Enjoy a wonderful cafe dining experience</span>
            </div>
          </div>

          <div className="grid">
            <h2 className="text-[#000] font-bold">LET’S TALK</h2>
            <span>Phone: 9-987-254-001</span>
            <span>Fax: 9-987-254-001</span>
          </div>
        </div>

        <div className="grid justify-center items-center text-center mb-6 gap-4 lg:gap-10">
          <div className="grid mb-4">
            <h2 className="text-[#000] text-[18px] lg:text-[20px] font-bold">
              BOOK A TABLE
            </h2>
            <div className="w-full max-w-[200px] mx-auto">
              <span>info@youroomain.com</span>
              <br />
              <span>hr@yourdomain.com</span>
            </div>
          </div>

          <div className="grid">
            <h2 className="text-[#000] font-bold">CONTACT US</h2>
            <span className="px-2">Get in touch</span>
            <span className="px-8">with us</span>
          </div>
        </div>

        <div className="grid justify-center items-center text-center mb-6">
          <h2 className="text-[#000] font-bold">OUR SOCIALS</h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="twitter"
                className="w-6 h-6 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-wrap justify-center items-center gap-6 text-center text-sm mb-4">
        <a href="privacy-policy">
          <span>Privacy Policy</span>
        </a>
        <a href="terms-conditions">
          <span>Terms and Conditions</span>
        </a>
        <a href="privacy-policy">
          <span>Cookies Policy</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
