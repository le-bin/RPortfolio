import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    {
      to: "home",
      icon: <Home className="mr-2 h-5 w-5" />,
      label: "Home",
    },
    {
      to: "about",
      icon: <User className="mr-2 h-5 w-5" />,
      label: "About",
    },
    {
      to: "skills",
      icon: <Code className="mr-2 h-5 w-5" />,
      label: "Skills",
    },
    {
      to: "projects",
      icon: <Briefcase className="mr-2 h-5 w-5" />,
      label: "Projects",
    },
    {
      to: "contact",
      icon: <Mail className="mr-2 h-5 w-5" />,
      label: "Contact",
    },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-black transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-95 backdrop-blur-md py-3"
          : "bg-opacity-90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span
            className="text-2xl md:text-3xl font-bold text-white cursor-pointer z-50"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Portfolio
          </span>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-2 xl:space-x-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl px-4 xl:px-6 py-3">
            {navItems.map(({ to, icon, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                  className="flex items-center px-3 xl:px-4 py-2 rounded-md text-white font-medium transition-all duration-300 hover:bg-gray-700 hover:bg-opacity-70 hover:text-yellow-300 cursor-pointer"
                  activeClass="text-yellow-300 bg-gray-700 bg-opacity-70"
                >
                  <span className="hidden xl:inline">{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="lg:hidden relative z-50 p-2 rounded-md text-white hover:bg-gray-800 hover:bg-opacity-50 transition-colors duration-200 mobile-menu-container"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-0 bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-300 ease-in-out mobile-menu-container ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          <div className="pt-20 pb-6 px-4">
            <ul className="space-y-2">
              {navItems.map(({ to, icon, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={600}
                    spy={true}
                    offset={-70}
                    onClick={handleMenuItemClick}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-70 hover:text-yellow-300 cursor-pointer active:scale-95"
                    activeClass="text-yellow-300 bg-gray-800 bg-opacity-70"
                  >
                    {icon}
                    <span className="text-lg">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
            style={{ top: "0" }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
