import { Link } from "react-scroll";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black bg-opacity-90 backdrop-blur-md py-4">
      <div className="container mx-auto max-w-5xl px-4 flex items-center">
        <span
          className="text-3xl font-bold text-white mr-auto cursor-pointer"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Portfolio
        </span>

        <ul className="flex space-x-6 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl px-6 py-3">
          {[
            {
              to: "home",
              icon: <Home className="mr-1 h-5 w-5" />,
              label: "Home",
            },
            {
              to: "about",
              icon: <User className="mr-1 h-5 w-5" />,
              label: "About",
            },
            {
              to: "skills",
              icon: <Code className="mr-1 h-5 w-5" />,
              label: "Skills",
            },
            {
              to: "projects",
              icon: <Briefcase className="mr-1 h-5 w-5" />,
              label: "Projects",
            },
            {
              to: "contact",
              icon: <Mail className="mr-1 h-5 w-5" />,
              label: "Contact",
            },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                className="flex items-center px-3 py-2 rounded-md text-white font-medium transition-all duration-300 hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-300 cursor-pointer"
                activeClass="text-yellow-300 bg-gray-700 bg-opacity-70"
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
