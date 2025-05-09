import React from 'react';
import { ArrowDown } from 'lucide-react';

const Self: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black dark:from-black dark:to-zinc-900 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-zinc-300 dark:to-zinc-500 animate-fade-in-up">
            <span className="block">Srinivas Pinisetti</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-300 dark:text-zinc-400 animate-fade-in-up animation-delay-200">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-500 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
            Fresh graduate with a strong passion for developing robust, scalable, and user-friendly web applications using Java technologies. Looking to apply my skills in Java backend development, Spring Boot, and frontend frameworks to create seamless, dynamic web applications.
          </p>
          <div className="animate-fade-in-up animation-delay-600">
            <button 
              onClick={scrollToAbout} 
              className="px-8 py-3 bg-zinc-700 hover:bg-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-100 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 shadow-lg"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-zinc-400 dark:text-zinc-500" size={24} />
      </div>
    </section>
  );
};

export default Self;