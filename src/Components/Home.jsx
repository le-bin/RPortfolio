import React from "react";
import "./Home.css"; // Custom animations
import myImage from "../assets/Pprofile.png";

// Import other sections to display on scroll
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Hero / Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
      >
        {/* Left Side - Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left z-10 mt-10 md:mt-0">
          <h2 className="text-xl md:text-2xl text-cyan-400">Hi, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Lebin Timsina
          </h1>

          <h3 className="text-2xl md:text-3xl font-medium text-gray-300">
            <span className="typing-text block text-cyan-300 h-[2.5rem] overflow-hidden"></span>
          </h3>

          <a
            href="resumelebin_u2_.pdf"
            download
            className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition"
          >
            Download CV
          </a>
        </div>

        {/* Right Side - Profile Image with Animation */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mt-10 md:mt-0">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500 animate-spin-slow blur-sm"></div>
          <div className="absolute inset-4 rounded-full border-2 border-blue-400 animate-pulse"></div>
          <img
            src={myImage}
            alt="Lebin Timsina"
            className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white"
          />
        </div>

        {/* Glow Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600 opacity-20 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-ping delay-1000"></div>
      </section>

      {/* Scrollable Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <hr className="border-t border-gray-700 mx-6 md:mx-20" />

      <Footer />
    </div>
  );
};

export default Home;
