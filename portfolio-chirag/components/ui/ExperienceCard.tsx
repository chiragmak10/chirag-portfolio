import React from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  logo,
  position,
  duration,
  description,
  technologies,
  achievements
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[200px] max-h-[400px]">
      <div className="flex items-start space-x-4 mb-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 group-hover:border-blue-200 transition-colors">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        
        {/* Company Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {company}
              </h3>
              <p className="text-gray-600 font-medium">{position}</p>
              <p className="text-sm text-gray-500">{duration}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{description}</p>
      
      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="line-clamp-1">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.slice(0, 6).map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
