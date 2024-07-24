import { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white z-50 fixed top-4 w-full  flex  flex-col justify-center items-center">
      <div className="w-full flex  justify-between items-center  p-4 backdrop-blur-lg lg:m-2 lg:rounded-full lg:shadow-lg lg:w-[800px] ">
        <img src={logo} alt="logo" width={80} height={22} />
        <div className="hidden lg:flex space-x-6">
          {LINKS.map((link, index) => (
            <a key={index} href={`#${link.targetId}`} className="text-sm pl-2 hover:opacity-50">
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden w-full  backdrop-blur-lg ">
        {LINKS.map((link, index) => (
            <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter">
              {link.text}
            </a>
          ))}
        </div>
        )}
    </nav>
  );
};

export default Navbar;
