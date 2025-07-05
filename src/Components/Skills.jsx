import React from "react";
import {
  Github,
  Figma,
  GitBranch,
  Code2,
  LampDesk,
  Search,
  AppWindow,
  FileText,
  Braces,
} from "lucide-react";

const techSkills = [
  { name: "HTML", icon: "🔤" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: <Braces size={20} /> },
  { name: "React", icon: <Code2 size={20} /> },
  { name: "Tailwind", icon: "🌬️" },
  { name: "Git", icon: <GitBranch size={20} /> },
  { name: "GitHub", icon: <Github size={20} /> },
  { name: "Figma", icon: <Figma size={20} /> },
];

const uiuxSkills = [
  { name: "Wireframing", icon: <AppWindow size={20} /> },
  { name: "Ideation", icon: <LampDesk size={20} /> },
  { name: "Research", icon: <Search size={20} /> },
  { name: "Prototyping", icon: <FileText size={20} /> },
];

const WebStructure = ({ skills, centerLabel }) => {
  const radius = 90;
  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10 shadow-lg">
        {centerLabel}
      </div>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={skill.name}
            className="absolute"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="bg-slate-800 text-white p-2 rounded-full text-center text-xs w-16 h-16 flex flex-col items-center justify-center hover:scale-105 transition">
              <span>{skill.icon}</span>
              <span className="mt-1">{skill.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-16 bg-[#0f172a] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side: Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">My Skills</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I enjoy turning ideas into clean, modern user interfaces. My
            experience lies in both designing UI/UX systems and building them
            using frontend technologies. Whether it's crafting wireframes,
            researching users, or coding responsive designs, I love the full
            process.
          </p>
        </div>

        {/* Right Side: Two Webs */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-cyan-300">Tech Stack</h3>
            <WebStructure skills={techSkills} centerLabel="Tech" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-cyan-300">
              UI/UX Skills
            </h3>
            <WebStructure skills={uiuxSkills} centerLabel="UI/UX" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
