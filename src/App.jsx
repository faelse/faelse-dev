import { useEffect, useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import ProjectNav from "./components/ProjectNav";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import { projects } from "./data/projects";

function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // open detail if URL is /project/:n on load
    const match = window.location.pathname.match(/\/project\/(\d+)/);
    if (match) {
      const idx = Number(match[1]) - 1;
      if (!Number.isNaN(idx) && projects[idx]) setSelected(idx);
    }

    const onPop = () => {
      const m = window.location.pathname.match(/\/project\/(\d+)/);
      if (m) {
        const idx = Number(m[1]) - 1;
        if (!Number.isNaN(idx) && projects[idx]) setSelected(idx);
      } else {
        setSelected(null);
      }
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openProject = (i) => {
    setSelected(i);
    // update URL to look like a distinct page
    window.history.pushState({}, "", `/project/${i + 1}`);
  };

  const closeProject = () => {
    setSelected(null);
    window.history.pushState({}, "", "/");
  };

  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      {selected === null ? (
        <HeaderLeft />
      ) : (
        <ProjectNav onOpen={openProject} selected={selected} />
      )}
      <main className="flex-3 w-full">
        {selected !== null ? (
          <ProjectDetail
            project={projects[selected]}
            index={selected}
            onClose={closeProject}
          />
        ) : (
          <>
            <Home />
            <Experience />
            <Project onOpen={openProject} />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
