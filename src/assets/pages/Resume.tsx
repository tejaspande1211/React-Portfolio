import React from "react";
import { GraduationCap, Code } from "lucide-react";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Resume
        </h1>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-2xl font-semibold text-gray-900 mb-6">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
            Education
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sinhgad Academy of Engineering, Pune
            </h3>
            <p className="text-gray-600 mb-1">2022 — 2026</p>
            <p className="text-gray-700 font-medium">Bachelor of Engineering</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold text-white mb-8">
            <Code className="w-7 h-7 mr-3 text-blue-600" />
            My Skills
          </h2>
          <div className="bg-[#18181c] rounded-2xl shadow-lg p-8 mb-4 border border-[#23232b]">
            {/* Languages */}
            <div className="mb-5">
              <span className="block font-semibold text-white text-lg mb-3">Languages</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++(Beginner)</span>
              </div>
            </div>
            {/* Frontend */}
            <div className="mb-5">
              <span className="block font-semibold text-white text-lg mb-3">Frontend</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            {/* Backend */}
            <div className="mb-5">
              <span className="block font-semibold text-white text-lg mb-3">Backend</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">Spring</span>
                <span className="skill-tag">PHP</span>
              </div>
            </div>
            {/* Database */}
            <div className="mb-5">
              <span className="block font-semibold text-white text-lg mb-3">Database</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
            {/* Tools & Technologies */}
            <div>
              <span className="block font-semibold text-white text-lg mb-3">Tools & Technologies</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
