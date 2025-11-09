import { BiBriefcase } from "react-icons/bi";
import { experiences } from "../data/experiences";

function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-8 md:p-20 lg:p-36"
    >
      <h2 className="text-center text-4xl font-light">Experiências</h2>

      <div className="w-full max-w-5xl">
        <div className="relative md:ml-6">
          <ul className="space-y-8">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative">
                <div className="rounded-md bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold md:text-xl">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    <div className="hidden items-center gap-2 text-sm text-gray-500 md:flex">
                      {exp.logoComponent ? (
                        <exp.logoComponent className="text-2xl text-(--color-primary)" />
                      ) : exp.logoImage ? (
                        <img
                          src={exp.logoImage}
                          alt="logo"
                          className="h-6 w-6 object-contain "
                          loading="lazy"
                        />
                      ) : (
                        <BiBriefcase className="text-2xl text-(--color-primary)" />
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">{exp.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
