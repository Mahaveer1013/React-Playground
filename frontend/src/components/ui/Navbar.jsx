import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import links from '../../data/json/navLinks.json'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="hidden bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <p className="text-2xl font-bold text-white">E-commerce App</p>

        {/* Desktop Links */}
        <ul className="hidden md:flex justify-around items-center space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="text-white text-lg hover:text-yellow-300 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:hidden bg-purple-600 transition-all duration-300`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="text-white text-lg hover:text-yellow-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
