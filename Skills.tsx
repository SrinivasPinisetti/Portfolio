import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, icon }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img 
            src={icon}
            alt={`${name} icon`}
            className="w-6 h-6 mr-2 object-contain"
          />
          <span className="font-medium text-zinc-200 dark:text-zinc-300">{name}</span>
        </div>
        <span className="text-sm text-zinc-400 dark:text-zinc-500">
          {level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 50 ? 'Intermediate' : 'Beginner'}
        </span>
      </div>
      <div className="w-full bg-zinc-800 dark:bg-black rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-zinc-600 to-zinc-400 dark:from-zinc-700 dark:to-zinc-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'JAVA', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
    { name: 'SpringBoot', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'JavaScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MySQL', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'CSS', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Python', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 dark:from-zinc-300 dark:to-zinc-400">
              Technical Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {skillsData.map((skill, index) => (
              <SkillItem 
                key={index}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center text-zinc-200 dark:text-zinc-300">
              Other Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Eclipse', 'Maven', 'RESTful APIs', 'MySQL', 'Git', 'GitHub', , 'VS Code',].map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-black dark:bg-zinc-900 rounded-full text-sm font-medium text-zinc-300 dark:text-zinc-400 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;