import { useEffect, useState, useRef } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [leaving, setLeaving] = useState(false);

  const backTimeout = useRef(null);

  const handleBack = () => {
    setLeaving(true);
    backTimeout.current = setTimeout(() => navigate("/#project"), 300);
  };

  useEffect(() => {
    if (!project) {
      navigate("/#project", { replace: true });
      return;
    }
    window.requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    });
  }, [project, navigate]);

  useEffect(() => {
    return () => {
      if (backTimeout.current) {
        clearTimeout(backTimeout.current);
      }
    };
  }, []);

  if (!project) return null;

  return (
    <div className="min-h-screen w-full flex items-start justify-center p-8">
      <div
        className={`max-w-4xl w-full p-6 transition-all duration-300 ease-in-out ${
          leaving ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <button
          onClick={handleBack}
          className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 mb-4"
        >
          <BiChevronLeft className="text-2xl text-gray-600" />{" "}
          <span className="text-gray-500">Back</span>
        </button>

        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-mono">
            <span className="text-gray-600">~/</span>
            {project.title}
          </h1>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              <span className="text-(--color-secondary)"># </span>
              {project.desc}
            </p>

            <div className="mt-6">
              <h4 className="text-sm text-gray-700 mb-2">
                Demo <span className="text-(--color-secondary)">/</span> Links
              </h4>
              <div className="flex gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border rounded text-sm text-gray-700"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="px-3 py-2 border rounded text-sm text-gray-400 cursor-not-allowed">
                    Demo
                  </span>
                )}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border rounded text-sm text-gray-700"
                  >
                    Repo
                  </a>
                ) : (
                  <span className="px-3 py-2 border rounded text-sm text-gray-400 cursor-not-allowed">
                    Repo
                  </span>
                )}
              </div>
            </div>
          </div>

          <aside className="rounded p-4 flex flex-col gap-4 items-start">
            <div className="w-full text-left">
              <h5 className="text-sm text-gray-700">Tecnologias</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-600"
                  >
                    Logo
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full text-left">
              <h5 className="text-sm text-gray-700">Detalhes</h5>
              <p className="mt-2 text-xs text-gray-600">
                <span className="text-(--color-secondary)"># </span>
                {project.detail}
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <h4 className="text-sm text-gray-700 mb-2">Preview</h4>
          <div className="w-full h-64 md:h-80 border-2 border-dashed border-gray-200 rounded-md flex items-center justify-center text-gray-400">
            Preview
          </div>
        </div>
      </div>
    </div>
  );
}
