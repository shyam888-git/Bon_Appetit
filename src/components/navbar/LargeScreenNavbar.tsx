import "./styles.css";
const navLink = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/reservation",
    name: "RESERVATION",
  },
  {
    path: "/menu",
    name: "MENU",
  },

  // {
  //   path: "/offers",
  //   name: "OFFERS",
  // },
  {
    path: "/contact",
    name: "CONTACT",
  },
];

const LargeScreenNavbar = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-8  transparent-navbar">
        {navLink.map((link, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-[#bdbbbb] hover:text-[#F69625]"
          >
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LargeScreenNavbar;
