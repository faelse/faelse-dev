import {
  BiBriefcase,
  BiCode,
  BiHome,
  BiMailSend,
  BiRightArrowAlt,
} from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function HeaderLeft() {
  const { pathname } = useLocation();
  const onProjectDetail = pathname.startsWith("/project");

  return (
    <div className="md:flex-1">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-primary text-white">
        <ul className="flex flex-col gap-10">
          {[
            { label: "home", target: "home" },
            { label: "experiências", target: "experience" },
            { label: "projetos", target: "project" },
            { label: "contate-me", target: "contact" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-start cursor-pointer font-medium 
              transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl"
            >
              <BiRightArrowAlt
                className="text-4xl -translate-x-5 opacity-0 
              transform transition-all duration-200 group-hover:opacity-100
               group-hover:translate-x-0"
              />
              <Link
                to={`/#${item.target}`}
                className="transition-all duration-200 hover:translate-x-3 capitalize"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-primary p-5 text-white md:hidden
        transform transition-all duration-500 ease-in-out will-change-[transform,opacity]
        ${
          onProjectDetail
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Link to="/#home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/#experience"
          className="flex flex-col items-center justify-center"
        >
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">Experiências</span>
        </Link>
        <Link
          to="/#project"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Projetos</span>
        </Link>
        <Link
          to="/#contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contate-me</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderLeft;
