import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, color, level = 90 }) => {
  return (
    <div className="group relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[120px] max-h-[140px]">
      <div className="flex items-center space-x-3 h-full">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">{name}</h3>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Proficiency</span>
              <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${level}%`, 
                  backgroundColor: color 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;
