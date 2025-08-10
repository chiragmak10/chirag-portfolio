"use client";

import React from 'react';

interface ChiragIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const ChiragIcon: React.FC<ChiragIconProps> = ({ 
  size = 40, 
  className = "", 
  animated = true 
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "animate-pulse" : ""}
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#gradient1)"
          className="transition-all duration-300 hover:scale-105"
        />
        
        {/* Letter C - Stylized */}
        <path
          d="M25 35C25 25 35 20 45 20C55 20 65 25 65 35C65 45 55 50 45 50C35 50 25 45 25 35Z"
          fill="url(#gradient2)"
          className="transition-all duration-300"
        />
        
        {/* Letter M - Stylized */}
        <path
          d="M35 30L45 50L55 30L65 50L65 70L55 70L55 55L45 70L35 55L35 70L25 70L25 50L35 30Z"
          fill="url(#gradient3)"
          className="transition-all duration-300"
        />
        
        {/* Decorative Elements */}
        <circle
          cx="30"
          cy="30"
          r="3"
          fill="url(#gradient4)"
          className={animated ? "animate-bounce" : ""}
          style={{ animationDelay: '0.2s' }}
        />
        <circle
          cx="70"
          cy="70"
          r="2"
          fill="url(#gradient4)"
          className={animated ? "animate-bounce" : ""}
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F3F4F6" />
          </linearGradient>
          
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-0 hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

export default ChiragIcon;
