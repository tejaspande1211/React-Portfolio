import React from "react";
import { Link2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  highlights?: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Restaurant Finder API",
      description:
        "RESTful backend service for managing restaurants and digital menus using Spring Boot. Focused on clean API design, reliable data persistence, and scalable backend architecture.",
      technologies: ["Java", "Spring Boot", "MySQL", "JPA", "Hibernate"],
      githubLink: "https://github.com/tejaspande1211/Restaurant-Finder",
      highlights: [
        "Designed REST APIs for restaurant and menu management",
        "Mapped entities using JPA and Hibernate",
        "Configured automatic schema updates to reduce manual DB work",
        "Ensured consistent data retrieval and storage"
      ]
    },
    {
      id: 2,
      title: "Apple Stock Price Forecasting",
      description:
        "Time-series forecasting system using LSTM to predict Apple (AAPL) stock closing prices based on historical market data.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "LSTM",
        "Matplotlib"
      ],
      githubLink: "https://github.com/tejaspande1211/Apple-Stock-Price-Forecasting",
      highlights: [
        "Analyzed 10+ years (~2,500 trading days) of stock data",
        "Applied Min-Max scaling with an 80:20 train-test split",
        "Used 60-day sliding windows for sequence modeling",
        "Evaluated predictions using RMSE and visual comparison"
      ]
    },
    {
      id: 3,
      title: "Challenge Management Application",
      description:
        "Spring Boot REST application for managing monthly coding challenges with full CRUD functionality and modular backend architecture.",
      technologies: ["Java", "Spring Boot", "JPA", "H2", "Maven"],
      githubLink: "https://github.com/tejaspande1211/ChallengeApp",
      highlights: [
        "Implemented full CRUD REST APIs",
        "Integrated JPA with H2 database for persistence",
        "Automated ID generation for data consistency",
        "Maintained clean, modular service architecture"
      ]
    },
    {
      id: 4,
      title: "Order Matching Engine",
      description:
        "Java-based order matching engine implementing price-time priority logic for buy and sell limit orders using core data structures.",
      technologies: ["Java", "Data Structures", "TreeMap", "Queue"],
      githubLink: "https://github.com/tejaspande1211/Order-Matching-Engine",
      highlights: [
        "Implemented price-time priority matching logic",
        "Built in-memory order book using TreeMap and Queue",
        "Handled partial order fills and sequential execution",
        "Processed 100+ simulated orders deterministically"
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
      <p className="text-sm text-gray-400 mb-12">
        Selected projects showcasing backend development, data analysis, and problem-solving.
      </p>

      {/* Projects */}
      <div className="space-y-14">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Title + link */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} repository`}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Link2 size={18} />
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && (
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Key Highlights</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
