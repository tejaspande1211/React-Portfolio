import React from "react";

export type Section = "about" | "resume" | "projects" | "contact";

interface NavBarProps {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
}

const NavBar: React.FC<NavBarProps> = ({
  activeSection,
  setActiveSection
}) => {
  const navItems: { id: Section; label: string }[] = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              type="button"
              className={`nav-button ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
