import React, { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./assets/components/Sidebar";
import NavBar from "./assets/components/NavBar";

import About from "./assets/pages/About";
import Resume from "./assets/pages/Resume";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";

type Section = "about" | "resume" | "projects" | "contact";

const SECTIONS: Record<Section, React.ReactNode> = {
  about: <About />,
  resume: <Resume />,
  projects: <Projects />,
  contact: <Contact />
};

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarActive(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <main>
        <Sidebar isActive={sidebarActive} />

        <div className="main-content">
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <article className={`content ${activeSection}`}>
            {SECTIONS[activeSection]}
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
