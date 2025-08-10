import React from 'react';
import { 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiRedux, 
  SiGraphql, 
  SiDocker, 
  SiGit, 
  SiFigma, 
  SiD3Dotjs, 
  SiCypress, 
  SiExpress
} from 'react-icons/si';

interface TechStack {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const StackSection: React.FC = () => {
  const techStack: TechStack[] = [
    { name: "TypeScript", icon: <SiTypescript size={20} />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript size={20} />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact size={20} />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs size={20} />, color: "#000000" },
    { name: "Node.js", icon: <SiNodedotjs size={20} />, color: "#339933" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, color: "#06B6D4" },
    { name: "MongoDB", icon: <SiMongodb size={20} />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql size={20} />, color: "#336791" },
    { name: "Redux", icon: <SiRedux size={20} />, color: "#764ABC" },
    { name: "Docker", icon: <SiDocker size={20} />, color: "#2496ED" },
    { name: "Git", icon: <SiGit size={20} />, color: "#F05032" },
    { name: "Figma", icon: <SiFigma size={20} />, color: "#F24E1E" },
    { name: "D3.js", icon: <SiD3Dotjs size={20} />, color: "#F9A03C" },
    { name: "GraphQL", icon: <SiGraphql size={20} />, color: "#E10098" },
    { name: "Cypress", icon: <SiCypress size={20} />, color: "#17202C" },
    { name: "Express.js", icon: <SiExpress size={20} />, color: "#000000" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 hover:shadow-sm dark:hover:shadow-md transition-all duration-200"
          title={tech.name}
        >
          <div 
            className="flex items-center justify-center w-6 h-6 rounded"
            style={{ backgroundColor: tech.color }}
          >
            {tech.icon}
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium font-['Poppins']">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StackSection;
