import React from 'react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'About', label: 'About' },
    { id: 'Resume', label: 'Resume' },
    { id: 'Projects', label: 'Portfolio' },
    { id: 'Contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              type="button"
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