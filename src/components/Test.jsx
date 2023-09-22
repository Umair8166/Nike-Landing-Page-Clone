import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Test = () => {
  return (
    <header className="padding-x py-6 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" height={40} width={130} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 padding-x max-laptop:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className="font-montserrat text-lg text-slate-gray leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/"
          className="flex justify-center items-center text-lg text-slate-700 font-semibold font-montserrat"
        >
          {/* <p className="text-lg text-slate-700 font-semibold font-montserrat"> */}
          Sign In / Explore now
          {/* </p> */}
        </a>
        <div></div>
      </nav>
    </header>
  );
};

export default Test;
