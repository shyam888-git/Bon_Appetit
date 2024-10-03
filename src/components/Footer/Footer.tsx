import facebook from "@/assets/SocialMedia/Instagram.png";
import instagram from "@/assets/SocialMedia/TwitterX.png";
import twitter from "@/assets/SocialMedia/TwitterX.png";
import Zarla from "@/assets/SocialMedia/Zarla.png";
import ZarlaIcon from "@/assets/SocialMedia/Zarla2.png";
const Footer = () => {
  return (
    <div className="grid w-full ">
      <div className="flex justify-center items-center gap-32 ">
        <div className="grid justify-center items-center">
          <img src={ZarlaIcon} alt="zarlaicon" />

          <img src={Zarla} alt="zarla" />
        </div>
        <div className="grid justify-center items-center gap-14">
          <div className=" grid  ">
            <h2 className="text-[#000] text-[20px] font-bold ">
              ABOUT RESTAURANT
            </h2>
            <div className="w-[200px]">
              <span>Enjoy a wonderful cafe dining experience</span>
            </div>
          </div>

          <div className=" grid ">
            <h2 className="text-[#000] font-bold">LET’S TALK</h2>
            <span>Phone: 9-987-254-001</span>
            <span>Fax: 9-987-254-001</span>
          </div>
        </div>

        <div className="grid justify-center items-center gap-14">
          <div className=" grid  ">
            <h2 className="text-[#000] text-[20px] font-bold ">BOOK A TABLE</h2>
            <div className="w-[200px]">
              <span>info@youroomain.com hr@yourdomain.com</span>
            </div>
          </div>

          <div className=" grid ">
            <h2 className="text-[#000] font-bold ">CONTACT US</h2>
            <span className="px-2">Get in touch</span>
            <span className="px-8">with us</span>
          </div>
        </div>

        <div className=" grid justify-center items-center">
          <h2>OUR SOCIALS</h2>
          <div className="flex justify-center items-center">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center gap-10  mt-4 mb-4  ">
        <span>Privacy Policy</span>
        <span> Terms and Conditions</span>
        <span>Cookies Policy</span>
      </div>
    </div>
  );
};

export default Footer;
