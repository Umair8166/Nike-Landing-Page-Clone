import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the dropdown when screen size is "max-laptop"
      if (window.innerWidth >= 1072) {
        setDropdownOpen(false);
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-6 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" height={30} width={130}></img>
        </a>

        {/* Menu Items */}
        <ul className="flex flex-1 justify-center items-center gap-10 md:gap-16 max-laptop:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In */}
        <a
          href="/sign-in"
          className="font-[600] text-lg max-md:text-md font-montserrat text-slate-600 max-sm:hidden xl:pr-4"
        >
          Sign in / Explore Now
        </a>

        <div className="relative inline-block text-left">
          {/* Hamburger icon */}
          <button
            onClick={toggleDropdown}
            type="button"
            className="hidden max-laptop:block focus:outline-none"
          >
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-300">
              <ul className="bg-white border border-gray-300 rounded-md shadow-lg overflow-auto">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="font-montserrat block px-4 py-2 text-slate-700 hover:bg-coral-red hover:text-white transition duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {/* Add more menu items as needed */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
