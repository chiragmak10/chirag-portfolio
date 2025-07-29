"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  FileIcon,
  GlobeIcon,
  WindowIcon,
} from "@/components/ui/FloatingDockIcons";
import Image from "next/image";

import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { HeroParallax } from "@/components/ui/hero-parallax";

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
    {
      icon: (
        <GlobeIcon className="mb-2 w-10 h-10 group-hover:scale-110 transition-transform" />
      ),
      label: "React",
    },
    {
      icon: (
        <WindowIcon className="mb-2 w-10 h-10 group-hover:scale-110 transition-transform" />
      ),
      label: "TypeScript",
    },
    {
      icon: (
        <FileIcon className="mb-2 w-10 h-10 group-hover:scale-110 transition-transform" />
      ),
      label: "Tailwind CSS",
    },
    {
      icon: (
        <GlobeIcon className="mb-2 w-10 h-10 group-hover:scale-110 transition-transform" />
      ),
      label: "D3.js",
    },
    {
      icon: (
        <WindowIcon className="mb-2 w-10 h-10 group-hover:scale-110 transition-transform" />
      ),
      label: "Data Viz",
    },
  ];

  // Projects data for HeroParallax
  const projects = [
    {
      title: "DataViz Dashboard",
      link: "#",
      thumbnail: "/projects/dataviz-dashboard.png",
    },
    {
      title: "Portfolio Website",
      link: "#",
      thumbnail: "/projects/portfolio-website.png",
    },
    {
      title: "Mastery Project",
      link: "#",
      thumbnail: "/projects/mastery-project.png",
    },
    {
      title: "Chat-App",
      link: "#",
      thumbnail: "/projects/chat-app.png",
    },
    {
      title: "Landing Page Design for NFT project",
      link: "#",
      thumbnail: "/projects/nft-landing.png",
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
      {
        type: "textarea",
        placeholder: "Your Message",
        name: "message",
        rows: 4,
      },
    ],
    button: "Send Message",
  };

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden font-sans text-gray-900">
      {/* Soft Animated Background */}
      <div className="-z-10 absolute inset-0">
        <BackgroundBeams />
      </div>
      {/* Hero Section */}
      <section className="relative flex md:flex-row flex-col justify-center items-center px-4 py-20 min-h-[70vh] animate-fade-in">
        {/* Left: Large Profile Image without Blue Background */}
        <div className="flex flex-shrink-0 justify-center items-center md:mr-20 mb-8 md:mb-0">
          <Image
            src="/chirag.png"
            alt="Chirag"
            width={500}
            height={500}
            className="aspect-rectangle"
          />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col items-center md:items-start max-w-xl md:text-left text-center">
          <h1 className="mb-4 font-extrabold text-gray-900 text-5xl">
            Hi, I&apos;m <span className="text-blue-400">Chirag</span>
          </h1>
          <p className="mb-8 text-gray-700 text-lg">
            Frontend Developer specializing in{" "}
            <span className="font-semibold text-blue-400">React</span>,{" "}
            <span className="font-semibold text-blue-400">TypeScript</span>,{" "}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>,
            and{" "}
            <span className="font-semibold text-blue-400">
              Data Visualization
            </span>{" "}
            with D3.
          </p>
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 shadow-sm hover:shadow-lg px-7 py-3 rounded-full font-bold text-white transition"
            >
              Resume
            </a>
            <a
              href="https://github.com/chirag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-100 hover:shadow-md px-7 py-3 border border-blue-400 rounded-full font-bold text-blue-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto px-4 py-12 max-w-2xl animate-delay-100 animate-fade-in"
      >
        <h2 className="mb-4 font-bold text-2xl">{about.heading}</h2>
        <p className="text-base leading-relaxed">{about.content}</p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mx-auto px-4 py-12 max-w-3xl animate-delay-200 animate-fade-in"
      >
        <h2 className="mb-6 font-bold text-2xl">Skills</h2>
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <span className="font-medium">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto px-4 py-12 max-w-6xl animate-delay-300 animate-fade-in"
      >
        <h2 className="mb-6 font-bold text-2xl">Projects</h2>
        <HeroParallax products={projects} />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto px-4 py-12 max-w-xl animate-delay-400 animate-fade-in"
      >
        <h2 className="mb-4 font-bold text-2xl">{contact.heading}</h2>
        <form className="flex flex-col gap-4">
          {contact.fields.map((field, idx) =>
            field.type === "textarea" ? (
              <textarea
                key={idx}
                placeholder={field.placeholder}
                rows={field.rows}
                name={field.name}
                className="bg-white dark:bg-neutral-900 px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                className="bg-white dark:bg-neutral-900 px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )
          )}
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 shadow-lg hover:shadow-xl mt-2 px-6 py-3 rounded-full text-white transition-colors"
          >
            {contact.button}
          </button>
        </form>
      </section>

      {/* Floating Dock Navigation */}
      <div className="right-6 bottom-6 z-50 fixed animate-float">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}
