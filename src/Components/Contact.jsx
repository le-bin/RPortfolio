import React from "react";
import { FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 pt-16 pb-40 bg-[#0f172a] text-white"
    >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
        Contact
      </h2>

      <div className="max-w-xl mx-auto space-y-6 text-center">
        <p className="text-gray-300 text-lg">
          Feel free to reach out if you’d like to connect, collaborate, or just
          say hi. I’m always open to new ideas and conversations!
        </p>

        <div className="flex flex-col items-center gap-6 mt-8">
          <a
            href="mailto: lebintimsina025@gmail.com"
            className="flex items-center gap-3 hover:text-cyan-400 transition"
          >
            <FaEnvelope className="text-xl" />
            <span>Mail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lebin-timsina-717a5a337/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-cyan-400 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.behance.net/lebintim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-cyan-400 transition"
          >
            <FaBehance className="text-xl" />
            <span>Behance</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
