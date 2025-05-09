import React from 'react';
import { Book, Award, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  period, 
  description, 
  achievements 
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-900"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 transform transition-all duration-300 group-hover:scale-125"></div>
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{degree}</h3>
        <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
          <Book size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
          <span>{institution}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{period}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <Award size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
              Key Achievements
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 pl-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.tech Computer Science And Engineering",
      institution: "BVC Enigineering College",
      period: "2019 - 2023",
      description: "Completed a comprehensive program covering algorithms, data structures, software engineering principles, web development, and database systems.",
      achievements: [
        "Graduated with (7.98 CGPA)",
        "Awarded 'Best Final Year Project' for excellence in project management and innovative implementation, demonstrating strong leadership, planning, and technical execution skills."
      ]
    },
    {
      degree: "Java FullStack Developer Certification",
      institution: "JSpiders",
      period: "june 2023 - Jan 2024",
      description: "Completed an 8-month intensive Java Full-Stack development course, gaining hands-on experience in building web applications using Core Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, and React. The training emphasized real-time project development, coding best practices, and industry-ready skills.",
      achievements: [
        "Completed 2 real-world  projects",
      ]
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior Collefe",
      period: "2017 - 2019",
    },
    {
      degree: "Secondary School Education",
      institution: "Sai Teja Public EM High School",
      period: "2016 - 2017"
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Education & Certifications
            </span>
          </h2>

          <div className="relative">
            {educationData.map((education, index) => (
              <EducationItem 
                key={index}
                degree={education.degree}
                institution={education.institution}
                period={education.period}
                description={education.description}
                achievements={education.achievements}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;