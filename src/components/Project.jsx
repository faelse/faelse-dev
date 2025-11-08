import { projects } from "../data/projects";

function Project({ onOpen }) {
  return (
    <section
      id="project"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-12 p-6 md:p-12 xl:px-32"
    >
      <h1 className="text-center text-4xl font-light">Projects</h1>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              onClick={() => onOpen && onOpen(i)}
              className="group bg-white/60 rounded-xl border border-gray-200 p-6 shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between min-h-80 md:min-h-88"
            >
              <header className="flex flex-col items-start cursor-pointer">
                <div>
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <h3 className="text-sm text-gray-700 mt-1">
                    {project.stack}
                  </h3>
                </div>
              </header>

              <main className="mt-4 flex-1">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {project.logos.map((logo, j) => (
                    <div
                      key={j}
                      className="h-9 w-9 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-[11px] text-gray-400 cursor-pointer"
                    >
                      Logo
                    </div>
                  ))}
                </div>
              </main>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
