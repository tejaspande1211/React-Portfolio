import React from "react";

const About: React.FC = () => {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building responsive and accessible user interfaces using React, HTML, CSS, and JavaScript, with a focus on clarity, usability, and performance."
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Designing and developing scalable backend systems using Java, Spring Boot, REST APIs, and relational databases with clean architecture."
    }
  ];

  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-text">
        <p>
          I'm <strong>Tejas Pande</strong>, a Computer Engineering undergraduate
          graduating in 2026, focused on building reliable full-stack and backend
          systems. My primary stack includes <strong>Java, Spring Boot, SQL, and React</strong>,
          and I enjoy working on problems that involve system design, data handling,
          and clean application logic.
        </p>

        <p>
          I have built multiple projects ranging from RESTful backend services and
          database-driven web applications to automated email systems and
          time-series forecasting models. Through academic, internship, and
          personal projects, I've gained hands-on experience in developing APIs,
          integrating databases, and creating responsive frontend interfaces that
          support real application workflows.
        </p>

        <p>
          My approach to development emphasizes maintainable code, efficient
          data processing, and practical solutions that go beyond basic demos.
          I aim to build systems that are easy to extend, test, and scale as
          requirements grow.
        </p>
      </div>

      <div className="what-im-doing">
        <h3>What I'm Doing</h3>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              role="button"
              tabIndex={0}
            >
              <div className="service-icon">{service.icon}</div>
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
