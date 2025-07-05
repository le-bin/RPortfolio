import React from "react";
import { FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-cyan-400">Lebin Timsina</h3>
          <p className="text-sm text-gray-400 mt-1">
            Creating interfaces with purpose and simplicity.
          </p>
        </div>

        {/* Center nav links */}
        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-cyan-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://www.linkedin.com/in/lebin-timsina-717a5a337/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/lebintim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaBehance />
          </a>
          <a
            href="mailto:lebintimsina025@gmail.com"
            className="hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Lebin Timsina. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
