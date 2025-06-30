"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { GlobeIcon, FileIcon, WindowIcon } from "@/components/ui/FloatingDockIcons";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function Home() {
  // Floating Dock items (replace hrefs with actual links)
  const dockItems = [
    {
      title: "GitHub",
      icon: <GlobeIcon className="w-5 h-5" />,
      href: "https://github.com/chirag",
    },
    {
      title: "LinkedIn",
      icon: <WindowIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/chirag",
    },
    {
      title: "Resume",
      icon: <FileIcon className="w-5 h-5" />,
      href: "/resume.pdf",
    },
  ];

  // Skills data
  const skills = [
    { icon: <GlobeIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />, label: "React" },
    { icon: <WindowIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />, label: "TypeScript" },
    { icon: <FileIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />, label: "Tailwind CSS" },
    { icon: <GlobeIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />, label: "D3.js" },
    { icon: <WindowIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />, label: "Data Viz" },
  ];

  // Projects data
  const projects = [
    {
      title: "DataViz Dashboard",
      description: "A dynamic dashboard for visualizing real-time data using D3.js and React. Features interactive charts, filters, and responsive design.",
      link: "#",
      image: null,
      tech: null,
      type: "card",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js, Tailwind CSS, and custom SVG micro-interactions. Optimized for performance and accessibility.",
      link: "#",
      image: null,
      tech: null,
      type: "card",
    },
    {
      title: "Mastery Project",
      description: [
        "Mastery is an end-to-end 3PL logistics management platform which facilitates broker with real-time tracking of vehicles, load management, incident management, invoice management, task management and delivery management. It also provides a transparent view to the retailer, vendor and the supplier.",
        "Contributed to landing page & CRM",
        "Contributed to development of employee tree",
      ],
      tech: "Technologies - React, Typescript, Graphql, HTML, CSS, Redux",
      image: "/projects/mastery-project.png",
      type: "detailed",
    },
    {
      title: "Chat-App",
      description: "Landing page design for chat app using webflow",
      tech: "Technologies - Webflow, Figma",
      image: "/projects/chat-app.png",
      link: "#",
      type: "detailed-link",
    },
    {
      title: "Landing Page Design for NFT project",
      description: null,
      tech: "Developed on webflow",
      image: "/projects/nft-landing.png",
      link: "#",
      type: "detailed-link",
    },
  ];

  // About section data
  const about = {
    heading: "About Me",
    content:
      "I'm Chirag, a passionate frontend developer with a knack for building interactive, data-driven web experiences. I love transforming complex data into beautiful, intuitive UIs. My strengths lie in React, TypeScript, Tailwind CSS, and D3.js. I thrive on creative challenges and enjoy collaborating with teams to deliver impactful solutions.",
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
    <div className="relative min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Soft Animated Background */}
      <div className="absolute inset-0 -z-10">
        <BackgroundBeams />
      </div>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-20 px-4 animate-fade-in">
        {/* Left: Large Profile Image without Blue Background */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-20 flex items-center justify-center">
          <Image
            src="/chirag.png"
            alt="Chirag"
            width={500}
            height={500}
            className="aspect-rectangle "
          />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Hi, I&apos;m <span className="text-blue-400">Chirag</span></h1>
          <p className="text-lg mb-8 text-gray-700">
            Frontend Developer specializing in <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span>, <span className="text-blue-400 font-semibold">Tailwind CSS</span>, and <span className="text-blue-400 font-semibold">Data Visualization</span> with D3.
          </p>
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-blue-400 text-white font-bold shadow-sm hover:bg-blue-500 hover:shadow-lg transition">Resume</a>
            <a href="https://github.com/chirag" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full border border-blue-400 text-blue-400 font-bold hover:bg-blue-100 hover:shadow-md transition">GitHub</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto py-12 px-4 animate-fade-in animate-delay-100">
        <h2 className="text-2xl font-bold mb-4">{about.heading}</h2>
        <p className="text-base leading-relaxed">{about.content}</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-3xl mx-auto py-12 px-4 animate-fade-in animate-delay-200">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
              {skill.icon}
              <span className="font-medium">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-12 px-4 animate-fade-in animate-delay-300">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, idx) => {
            if (project.type === "card") {
              return (
                <div key={idx} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-transform group">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500 dark:text-blue-300 font-medium group-hover:underline">View Project →</a>
                </div>
              );
            } else if (project.type === "detailed") {
              return (
                <div key={idx} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:scale-[1.03] transition-transform group">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="font-semibold text-gray-500 mb-2">{project.tech}</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                      {Array.isArray(project.description) ? project.description.map((desc, i) => <li key={i}>{desc}</li>) : <li>{project.description}</li>}
                    </ul>
                  </div>
                  {typeof project.image === 'string' && (
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image src={project.image} alt={project.title} width={180} height={120} className="rounded-lg shadow-md object-contain" />
                    </div>
                  )}
                </div>
              );
            } else if (project.type === "detailed-link") {
              return (
                <div key={idx} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:scale-[1.03] transition-transform group">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="font-semibold text-gray-500 mb-2">{project.tech}</p>
                    {project.description && <p className="text-gray-600 text-sm mb-2">{project.description}</p>}
                    <a href={project.link} className="inline-block mt-2 px-6 py-2 border border-gray-400 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition">Check This out</a>
                  </div>
                  {typeof project.image === 'string' && (
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image src={project.image} alt={project.title} width={180} height={120} className="rounded-lg shadow-md object-contain" />
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-12 px-4 animate-fade-in animate-delay-400">
        <h2 className="text-2xl font-bold mb-4">{contact.heading}</h2>
        <form className="flex flex-col gap-4">
          {contact.fields.map((field, idx) =>
            field.type === "textarea" ? (
              <textarea
                key={idx}
                placeholder={field.placeholder}
                rows={field.rows}
                name={field.name}
                className="rounded-lg border px-4 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                className="rounded-lg border px-4 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )
          )}
          <button type="submit" className="mt-2 px-6 py-3 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-500 hover:shadow-xl transition-colors">{contact.button}</button>
        </form>
      </section>

      {/* Floating Dock Navigation */}
      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}
