import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" height={30} width={130}></img>
        </a>
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
        <a
          href="/sign-in"
          className="font-semibold text-lg font-montserrat text-slate-700 max-laptop:hidden"
        >
          Sign in / Explore Now
        </a>
        <div className="hidden max-laptop:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
