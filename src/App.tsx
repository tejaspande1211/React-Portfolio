import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './assets/components/Sidebar';
import NavBar from './assets/components/NavBar';
import About from './assets/pages/About';
import Resume from './assets/pages/Resume';
import Projects from './assets/pages/Projects';
import Contact from './assets/pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('About');
  const [sidebarActive, setSidebarActive] = useState(false);

  // Handle smooth transitions between sections
  useEffect(() => {
    const timer = setTimeout(() => {
      setSidebarActive(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <main>
        <Sidebar isActive={sidebarActive} />
        
        <div className="main-content">
          <NavBar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
          />
          
          <article className={`content ${activeSection.toLowerCase()}`}>
            {renderActiveSection()}
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;