import logo from "../assets/logo.svg";
import { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";

const NavLink = [
  { title: "Home" },
  { title: "About" },
  { title: "Contact" },
  { title: "Blog" },
  { title: "Careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="py-4 md:py-6  bg-white fixed top-0 left-0 right-0 z-50">
      <nav className="hidden lg:flex items-center justify-between max-w-[1100px] mx-auto">
        <div>
          <img src={logo} alt="This is the logo of the website" />
        </div>

        <div className="flex lg:gap-8 md:gap-4 items-center">
          {NavLink.map((item) => (
            <div key={item.title} className="relative group">
              <ul>
                <li className="text-Grayish-Blue font-normal hover:text-Dark-Blue">
                  <a href="#">{item.title}</a>
                </li>
              </ul>
              <div className="h-[4px] w-full bg-gradient-to-tr from-Lime-Green to-Bright-Cyan lg:top-[60px] md:top-[40px] absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <a
          href="#"
          className="flex items-center justify-center px-8 py-4 bg-gradient-to-tr from-Lime-Green to-Bright-Cyan rounded-full text-Very-Light-Gray hover:opacity-60"
        >
          Request Invite
        </a>
      </nav>

      {/* Mobile nav */}

      <nav className="lg:hidden flex items-center justify-between relative">
        <div className="flex lg:hidden gap-3 items-center justify-between px-12 py-4 w-full">
          <img src={logo} alt="" width={120} height={120} />

          <img
            className="cursor-pointer"
            src={isOpen ? iconClose : hamburger}
            alt="This is the icon that opens the mobile navigation"
            width={isOpen ? 20 : 30}
            height={30}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <>
            {/* Dark wrapper background */}
            <div
              className="fixed left-0 right-0 top-[5rem] bottom-0 bg-black bg-opacity-50 z-40"
              onClick={toggleNavigation}
            />
            <div className="absolute lg:hidden bg-white top-[6rem] z-50 w-[80%] mx-auto left-0 right-0 rounded-md">
              <ul className="flex flex-col gap-8 items-center barlow-semibold py-10">
                {NavLink.map((item) => (
                  <div key={item.title} className="">
                    <ul>
                      <li className="text-Dark-Blue font-normal">
                        <a href="#">{item.title}</a>
                      </li>
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
