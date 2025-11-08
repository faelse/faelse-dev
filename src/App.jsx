import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
      if (!hash) return;
      const id = hash.replace("#", "");

      const scroll = () => {
        const el = document.getElementById(id);
        if (el) {
          try {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } catch {
            el.scrollIntoView();
          }
        }
      };

      requestAnimationFrame(() => scroll());

      const t = setTimeout(scroll, 120);
      return () => clearTimeout(t);
    }, [hash, pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToHash />
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-3 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Experience />
                  <Project />
                  <Contact />
                </>
              }
            />

            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
