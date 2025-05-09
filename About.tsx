import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 dark:from-zinc-300 dark:to-zinc-400">
              About Me
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div className="relative">
      
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-200 dark:text-zinc-300">Hello, I'm Srinivas Pinisetti</h3>
              <p className="text-zinc-400 dark:text-zinc-500 mb-4 leading-relaxed">
                I'm a recent Computer Science graduate passionate about building robust and scalable web applications. With a solid foundation in Core Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, and React, I bring a full-stack development approach and fresh perspective to modern software solutions. I'm eager to contribute to dynamic teams and grow as a Java full-stack developer.
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 mb-6 leading-relaxed">
                During my studies, I completed several projects that honed my skills in responsive design, 
                performance optimization, and accessibility. I'm eager to join a team where I can contribute 
                my technical abilities while continuing to learn and grow as a developer.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-zinc-900 dark:bg-black">
                  <p className="text-sm text-zinc-500 dark:text-zinc-600">Experience</p>
                  <p className="font-medium text-zinc-300 dark:text-zinc-400">Fresher</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-900 dark:bg-black">
                  <p className="text-sm text-zinc-500 dark:text-zinc-600">Availability</p>
                  <p className="font-medium text-zinc-300 dark:text-zinc-400">Immediate</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-900 dark:bg-black">
                  <p className="text-sm text-zinc-500 dark:text-zinc-600">Work</p>
                  <p className="font-medium text-zinc-300 dark:text-zinc-400">Remote/Onsite</p>
                </div>
              </div>

              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-zinc-700 hover:bg-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-100 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;