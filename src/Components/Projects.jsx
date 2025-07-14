import React from "react";
import bardaliImg from "../assets/baardali.png";
import lubroImg from "../assets/Lubropaints.png";
import foodImg from "../assets/Food ord.png";
// Import the new image for the travel website
import travelImg from "../assets/Travels home page.png"; // Make sure this path is correct!

const Projects = () => {
  const projectData = [
    {
      title: "Bardali Creation Website",
      img: bardaliImg,
      description:
        "A vibrant website design in Figma for Bardali, an IT-based company located in Itahari, featuring intuitive navigation and responsive layouts tailored for Nepali users. Live with a full case study.",
      live: "https://bardali.com.np/", // Replace with real link
      caseStudy: "https://www.behance.net/gallery/229661993/Bardali-Case-Study", // Replace with real link
    },
    // --- NEW TRAVEL WEBSITE PROJECT INSERTED HERE ---
    {
      title: "Wanderlust: A Travel Website Re-Design", // Using one of the recommended headings
      img: travelImg,
      description:
        "Designed in Figma, this project delivers an intuitive and visually engaging travel experience, guiding users through destinations and planning their next adventure.",
      caseStudy:
        "https://www.behance.net/gallery/230290179/Travels-Service-Case-Study", // <--- IMPORTANT: REPLACE THIS WITH YOUR ACTUAL BEHANCE LINK
    },
    // --- END NEW PROJECT ---
    {
      title: "Lubro Paints Website",
      img: lubroImg,
      description:
        "A modern Figma design using a bento grid layout, showcasing paint products for Lubro Paints — a local brand based in Itahari, Nepal.",
      caseStudy: "https://www.behance.net/gallery/226420563/Case-Study", // Replace with real link
    },
    {
      title: "Food Ordering System",
      img: foodImg,
      description:
        "A MERN-based food ordering web app developed as a group project. Available on GitHub.",
      github: "https://github.com/Saameerr/Food-ordering-system.git", // Replace with real link
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-16 bg-[#0f172a] text-white"
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="bg-[#1e293b] p-5 rounded-lg shadow-lg">
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg mb-4 h-48 w-full object-cover brightness-70"
            />
            <h3 className="text-xl font-semibold text-cyan-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-600 rounded-full text-sm hover:bg-cyan-700 transition"
                >
                  Live Site
                </a>
              )}
              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  Case Study
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
