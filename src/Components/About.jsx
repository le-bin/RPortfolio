import React from "react";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import boyImage from "../assets/boy.png";
import "./About.css"; // for floating animation

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-[#0f172a] text-white gap-10"
    >
      {/* Left: Animated Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={boyImage}
          alt="Lebin Illustration"
          className="w-72 md:w-96 floating"
        />
      </div>

      {/* Right: About Info */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
          About Me
        </h2>
        <p className="text-lg text-gray-300">
          Hello! I’m{" "}
          <span className="text-white font-semibold">Lebin Timsina</span>, a
          creative <span className="text-cyan-400">UI/UX Designer</span> and{" "}
          <span className="text-cyan-400">Frontend Developer</span> from Nepal.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I'm learning to design and develop modern user interfaces with a focus
          on clean and simple layouts. I’m passionate about design systems and
          enjoy working on real projects to improve my skills in UI design and
          frontend development. In my free time, I like exploring new design
          ideas, reading tech blogs, and listening to music to relax.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-200">
          <div>
            <span className="text-cyan-400">Name:</span>
            <br />
            Lebin Timsina
          </div>
          <div>
            <span className="text-cyan-400">Role:</span>
            <br />
            Designer & Dev
          </div>
          <div>
            <span className="text-cyan-400">Location:</span>
            <br />
            Nepal
          </div>
          <div>
            <span className="text-cyan-400">Available:</span>
            <br />
            Yes
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-200">
          <div className="flex items-center gap-3">
            <FaLaptopCode className="text-cyan-400 text-xl" />
            <div>
              <span className="font-semibold">6+ Months Experience</span>
              <br />
              UI/UX Design
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-cyan-400 text-xl" />
            <div>
              <span className="font-semibold">BSc CSIT</span>
              <br />
              Godawari College, Nepal
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition"
        >
          Connect Me
        </a>
      </div>
    </section>
  );
};

export default About;
