import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
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
