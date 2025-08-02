import React from "react";
import bardaliImg from "../assets/baardali.png";
import lubroImg from "../assets/Lubropaints.png";
import foodImg from "../assets/Food ord.png";
import travelImg from "../assets/Travels home page.png";
import furnitureImg from "../assets/Hero section.png";
import eventImg from "../assets/Venues.png";

const Projects = () => {
  const projectData = [
    // 1) Wanderlust
    {
      title: "Wanderlust: A Travel Website Re-Design",
      img: travelImg,
      description:
        "Designed in Figma, this project delivers an intuitive and visually engaging travel experience, guiding users through destinations and planning their next adventure.",
      caseStudy:
        "https://www.behance.net/gallery/230290179/Travels-Service-Case-Study",
    },
    // 2) Furniture
    {
      title: "Furniture Store Website",
      img: furnitureImg,
      description:
        "A sleek furniture e-commerce website designed in Figma, emphasizing product visibility, minimalistic design, and a smooth shopping experience.",
      prototype:
        "https://www.figma.com/proto/pLzAIyywZ3eaLZN9qV53kc/Furniture-site?node-id=1-2&t=tlfi106nDYrY17im-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    },
    // 3) Food Ordering
    {
      title: "Food Ordering System",
      img: foodImg,
      description:
        "A MERN-based food ordering web app developed as a group project. Available on GitHub.",
      github: "https://github.com/Saameerr/Food-ordering-system.git",
    },
    // 4) Bardali
    {
      title: "Bardali Creation Website",
      img: bardaliImg,
      description:
        "A vibrant website design in Figma for Bardali, an IT-based company located in Itahari, featuring intuitive navigation and responsive layouts tailored for Nepali users. Live with a full case study.",
      live: "https://bardali.com.np/",
      caseStudy: "https://www.behance.net/gallery/229661993/Bardali-Case-Study",
    },
    // 5) Event Management
    {
      title: "Event Management System",
      img: eventImg,
      description:
        "A modern event management platform designed in Figma, focusing on venue booking, schedule management, and seamless user experience.",
      prototype:
        "https://www.figma.com/proto/vHRAF1OME3QuwfQG5RaKoD/Party-Palace?node-id=1-14&t=bcwgR9wtmmMKKpJT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A14",
    },
    // 6) Lubro Paints
    {
      title: "Lubro Paints Website",
      img: lubroImg,
      description:
        "A modern Figma design using a bento grid layout, showcasing paint products for Lubro Paints — a local brand based in Itahari, Nepal.",
      caseStudy: "https://www.behance.net/gallery/226420563/Case-Study",
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
              {project.prototype && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 rounded-full text-sm hover:bg-purple-700 transition"
                >
                  Prototype
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
