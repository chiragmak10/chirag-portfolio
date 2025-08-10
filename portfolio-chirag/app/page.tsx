"use client";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import ProjectCard from "@/components/ui/ProjectCard";
import StackSection from "@/components/ui/StackSection";
import Navbar from "@/components/ui/Navbar";

import ChiragIcon from '@/components/ui/ChiragIcon';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
export default function Home() {

  // Enhanced Projects data
  const projects = [
    {
      title: "DataViz Dashboard",
      description: "A dynamic dashboard for visualizing real-time data using D3.js and React. Features interactive charts, filters, and responsive design.",
      image: "/projects/dataviz-dashboard.png",
      technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js, Tailwind CSS, and custom SVG micro-interactions. Optimized for performance and accessibility.",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "Mastery Project",
      description: [
        "Mastery is an end-to-end 3PL logistics management platform which facilitates broker with real-time tracking of vehicles, load management, incident management, invoice management, task management and delivery management.",
        "Contributed to landing page & CRM development",
        "Contributed to development of employee tree structure",
        "Implemented real-time tracking and analytics dashboard"
      ],
      image: "/projects/mastery-project.png",
      technologies: ["React", "TypeScript", "GraphQL", "Redux", "Node.js"],
      link: "#"
    },
    {
      title: "Chat-App Landing",
      description: "Modern landing page design for chat application using Webflow with custom animations and responsive design.",
      image: "/projects/chat-app.png",
      technologies: ["Webflow", "Figma", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      title: "NFT Landing Page",
      description: "Creative landing page design for NFT project with modern UI/UX principles and engaging animations.",
      image: "/projects/nft-landing.png",
      technologies: ["Webflow", "Figma", "CSS3", "GSAP"],
      link: "#"
    },
  ];

  // About section data
  const about = {
    heading: "About Me",
    content:
      "Frontend Developer Passionate about creating interactive, data-driven web experiences. I transform complex data into beautiful, intuitive UIs and thrive on creative challenges that push the boundaries of modern web development.",
  };

  // Contact section data
  const contact = {
    heading: "Contact",
    fields: [
      { type: "text", placeholder: "Your Name", name: "name" },
      { type: "email", placeholder: "Your Email", name: "email" },
      { type: "textarea", placeholder: "Your Message", name: "message", rows: 4 },
    ],
    button: "Send Message",
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Soft Animated Background */}
      <div className="absolute inset-0 -z-10">
        <BackgroundBeams />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen py-20 px-4 pt-32 lg:pt-20 animate-fade-in">
        {/* Left: Large Profile Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-16 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/chirag.png"
              alt="Chirag"
              width={800}
              height={800}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                Chirag
              </span>
            </h1>
          </div>
          
          {/* About Content */}
          <div className="mb-8 p-6 bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.content}
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://github.com/chirag" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-16 sm:py-20 px-4 animate-fade-in animate-delay-300 min-h-[800px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development and design.
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto py-16 sm:py-20 px-4 animate-fade-in animate-delay-500 min-h-[500px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{contact.heading}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Let&apos;s work together! I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
          <form className="flex flex-col gap-4 sm:gap-6">
            {contact.fields.map((field, idx) =>
              field.type === "textarea" ? (
                <textarea
                  key={idx}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  name={field.name}
                  className="rounded-xl border-2 border-gray-200 dark:border-gray-600 px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              ) : (
                <input
                  key={idx}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  className="rounded-xl border-2 border-gray-200 dark:border-gray-600 px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                />
              )
            )}
            <button 
              type="submit" 
              className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              {contact.button}
            </button>
          </form>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
