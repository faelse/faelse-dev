import { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { projects } from "../data/projects";

export default function ProjectNav({ onOpen, selected }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className={`md:flex-1 transition-all duration-300 ${
        mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-primary text-white">
        <ul className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <li
              key={p.title + i}
              onClick={() => onOpen && onOpen(i)}
              className={`flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl ${
                selected === i ? "opacity-100" : "opacity-90"
              }`}
            >
              <BiRightArrowAlt
                className={`text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${
                  selected === i ? "opacity-100 translate-x-0" : ""
                }`}
              />
              <button className="transition-all duration-200 hover:translate-x-3 ml-3 text-left cursor-pointer">
                {p.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-primary p-5 text-white md:hidden">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => onOpen && onOpen(i)}
            className="flex flex-col items-center justify-center cursor-pointer"
            title={p.title}
          >
            <span className="h-6 w-6 rounded bg-white/10 flex items-center justify-center text-[10px]">
              {i + 1}
            </span>
            <span className="text-xs">{p.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
