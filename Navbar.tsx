import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black dark:bg-zinc-900 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold cursor-pointer flex items-center" 
            onClick={() => scrollTo('hero')}
          >
            <span className="text-zinc-400 dark:text-zinc-500">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollTo('about')}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('education')}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-zinc-800 dark:hover:bg-black transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-zinc-400" /> : <Moon size={20} className="text-zinc-400" />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-zinc-800 dark:hover:bg-black transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-zinc-400" /> : <Moon size={20} className="text-zinc-400" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-zinc-800 dark:hover:bg-black transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-zinc-400" /> : <Menu size={24} className="text-zinc-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-black dark:bg-zinc-900 shadow-lg rounded-b-lg mt-2 py-4 px-2 absolute left-0 right-0 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollTo('about')}
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 py-2 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollTo('skills')}
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 py-2 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollTo('education')}
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 py-2 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 py-2 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400 py-2 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;