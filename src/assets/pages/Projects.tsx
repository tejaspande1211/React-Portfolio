import React from 'react';
import { Github, Calendar, Users, Code2 } from 'lucide-react';

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
      title: "Task Scheduler with Email Notification System",
      description: "Built task management application with hourly email notifications to verified subscribers. Processed 10+ daily notifications and configured CRON jobs to run every hour. Implemented file I/O operations handling multiple tasks with text file storage, eliminating 50% of manual reminders.",
      technologies: ["PHP", "File I/O", "CRON"],
      githubLink: "https://github.com/tejaspande1211/task-scheduler-tejaspande1211",
      highlights: ["10+ daily notifications", "50% reduction in manual reminders", "Hourly CRON automation"]
    },
    {
      id: 2,
      title: "Responsive Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with dynamic animations and interactive elements. Built with clean, semantic code and optimized for performance across all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      githubLink: "https://tejaspande1211.github.io/Portfolio/",
      highlights: ["Fully responsive design", "Modern UI/UX", "Performance optimized"]
    },
    {
      id: 3,
      title: "Online Course Registration System",
      description: "Full-stack web portal for student enrollment and course management as part of a 4-member team. Created admin dashboard with role-based access control and live enrollment counters.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/tejaspande1211/Online-course-registartion-Using-PHP",
      highlights: ["4-member team collaboration", "Role-based access control", "Live enrollment tracking"]
    }
  ];

  const getProjectIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Calendar className="w-5 h-5" />;
      case 2:
        return <Code2 className="w-5 h-5" />;
      case 3:
        return <Users className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development, 
          automation, and collaborative problem-solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              {project.highlights && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technologies Footer */}
            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;