import {
  BiBriefcase,
  BiCode,
  BiHome,
  BiMailSend,
  BiRightArrowAlt,
} from "react-icons/bi";
import { Link } from "react-router-dom";

function HeaderLeft() {
  return (
    <div className="md:flex-1">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-primary text-white">
        <ul className="flex flex-col gap-10">
          {["home", "experience", "project", "contact", "about-me"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center justify-start cursor-pointer font-medium 
              transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl"
              >
                <BiRightArrowAlt
                  className="text-4xl -translate-x-5 opacity-0 
              transform transition-all duration-200 group-hover:opacity-100
               group-hover:translate-x-0"
                />
                <Link
                  to={`/#${item}`}
                  className="transition-all duration-200 hover:translate-x-3"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-primary p-5 text-white md:hidden">
        <Link to="/#home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/#experience"
          className="flex flex-col items-center justify-center"
        >
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">Experience</span>
        </Link>
        <Link
          to="/#project"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Projects</span>
        </Link>
        <Link
          to="/#contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderLeft;
