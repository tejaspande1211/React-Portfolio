import React from 'react';

interface SidebarProps {
  isActive: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive }) => {
  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="sidebar-content">
        {/* Avatar - You can replace this with an actual image */}
        <div className="avatar">
           {/* YN Replace with your initials */}
           <img src="src/Logo2.png"  style={{ width: '130%', height: '110%'}} />
        </div>
        
        <h1>Tejas Pande</h1> {/* Replace with your name */}
        <p className="title">Full Stack Developer</p> {/* Replace with your title */}
        
        <div className="contact-info">
          <div className="contact-item">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="contact-text">tejaspande1211@gmail.com</span>
          </div>
          
          <div className="contact-item">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="contact-text">+91 801085XXXX</span>
          </div>
          
          <div className="contact-item">
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="contact-text">Pune, Maharashtra, India</span>
          </div>
          
          <div className="contact-item">
            {/* <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="contact-text">linkedin.com/in/tejas-pande-38b66b256</span> */}
            <a
            href="https://linkedin.com/in/tejas-pande-38b66b256"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item cursor-pointer"
          >
            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="contact-text">linkedin.com/in/tejas-pande-38b66b256</span>
          </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;