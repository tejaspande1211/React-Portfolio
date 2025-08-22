import React from 'react';

const About: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly interfaces using modern frameworks and technologies.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development', 
      description: 'Building and optimizing server-side architecture, APIs, and databases for seamless and scalable application performance.'
    }
  ];

  return (
    <section className="about-section">
      <h2 className="section-title">About me</h2>
      
      <div className="about-text">
        <p>
          Hi, I'm <strong>Tejas Pande</strong>, a passionate Full Stack Developer dedicated to building user-friendly and efficient applications. I thrive on bringing ideas to life by crafting seamless experiences on both the frontend and backend, combining modern tools and technologies to deliver robust solutions.
        </p>
        <p>
Computer Engineering student (Expected 2026) with strong foundation in Java, SQL, Python, and C++. Built 3 
full-stack applications including automated email systems and database-driven web portals. Gained hands-on 
experience in web development through academic and personal projects, focusing on building responsive interfaces 
and functional web applications.        </p>
      </div>

      <div className="what-im-doing">
        <h3>What I'm doing</h3>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;