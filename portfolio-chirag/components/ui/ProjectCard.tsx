import React from 'react';
import Image from 'next/image';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiPrisma, 
  SiRedux, 
  SiGraphql, 
  SiDocker, 
  SiGit, 
  SiFigma, 
  SiD3Dotjs, 
  SiCypress, 
  SiWebpack, 
  SiExpress, 
  SiGatsby, 
  SiWebflow,
  SiCss3,
  SiFramer
} from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  description: string | string[];
  image?: string;
  technologies: string[];
  link?: string;
}

// Technology to icon mapping
const getTechIcon = (techName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'React': <SiReact size={16} />,
    'TypeScript': <SiTypescript size={16} />,
    'JavaScript': <SiJavascript size={16} />,
    'Python': <SiPython size={16} />,
    'Node.js': <SiNodedotjs size={16} />,
    'Next.js': <SiNextdotjs size={16} />,
    'Tailwind CSS': <SiTailwindcss size={16} />,
    'MongoDB': <SiMongodb size={16} />,
    'PostgreSQL': <SiPostgresql size={16} />,
    'Redis': <SiRedis size={16} />,
    'Prisma': <SiPrisma size={16} />,
    'Redux': <SiRedux size={16} />,
    'GraphQL': <SiGraphql size={16} />,
    'Docker': <SiDocker size={16} />,
    'Git': <SiGit size={16} />,
    'Figma': <SiFigma size={16} />,
    'D3.js': <SiD3Dotjs size={16} />,
    'Cypress': <SiCypress size={16} />,
    'Webpack': <SiWebpack size={16} />,
    'Express.js': <SiExpress size={16} />,
    'Gatsby': <SiGatsby size={16} />,
    'Webflow': <SiWebflow size={16} />,
    'CSS3': <SiCss3 size={16} />,
    'Framer Motion': <SiFramer size={16} />,
  };

  return iconMap[techName] || <span className="text-xs font-bold text-gray-600">{techName.charAt(0)}</span>;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  link
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[200px] max-h-[400px]">
      <div className="flex items-start space-x-6">
        {/* Project Image/Logo - Left Side */}
        <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-400 transition-colors overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="object-cover rounded-xl"
            />
          ) : (
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              {title.charAt(0)}
            </div>
          )}
        </div>
        
        {/* Project Info - Right Side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              {link && (
                <a 
                  href={link}
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-4">
            {Array.isArray(description) ? (
              <ul className="space-y-1">
                {description.slice(0, 3).map((desc, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="line-clamp-1">{desc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">{description}</p>
            )}
          </div>
          
          {/* Technologies with Proper Icons */}
          <div className="flex flex-wrap gap-3">
            {technologies.slice(0, 6).map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:border-blue-200 dark:group-hover:border-blue-400 transition-colors">
                  {getTechIcon(tech)}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
