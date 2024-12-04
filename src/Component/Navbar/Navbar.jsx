import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import Logo from '../Pages/imges/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeClass = "text-red-600 font-bold";

  return (
    <nav
      className={`${
        isScrolled ? 'py-2 bg-opacity-90' : 'py-5'
      } bg-black px-7 border-b-4 border-red-600 w-full md:w-1/2 mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className={`rounded-full border-4 border-slate-600 ${
              isScrolled ? 'w-8 h-8 md:w-16 md:h-16' : 'w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24'
            }`}
            src={Logo}
            alt="logo"
          />
          <h1 className="text-white text-3xl ml-2 font-semibold md:ml-5">FlexZone</h1>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white text-lg font-semibold space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : 'hover:text-red-600 hover:underline underline-offset-4 transition duration-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : 'hover:text-red-600 hover:underline underline-offset-4 transition duration-300'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : 'hover:text-red-600 hover:underline underline-offset-4 transition duration-300'
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join"
              className={({ isActive }) =>
                isActive ? activeClass : 'hover:text-red-600 hover:underline underline-offset-4 transition duration-300'
              }
            >
              Join Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4 text-white transition-all duration-500 ease-in-out">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : 'text-lg hover:underline underline-offset-4 transition duration-300'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : 'text-lg hover:underline underline-offset-4 transition duration-300'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : 'text-lg hover:underline underline-offset-4 transition duration-300'
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/join"
                className={({ isActive }) =>
                  isActive ? activeClass : 'text-lg hover:underline underline-offset-4 transition duration-300'
                }
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
