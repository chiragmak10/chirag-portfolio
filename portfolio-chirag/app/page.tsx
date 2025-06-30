"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { GlobeIcon, FileIcon, WindowIcon } from "@/components/ui/FloatingDockIcons";
import { TextReveal } from "@/components/ui/TextReveal";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Image from "next/image";
import { Lens } from "@/components/ui/lens";

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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16">
        <BackgroundBeams />
        <div className="relative z-10 flex flex-col items-center">
          <Lens zoomFactor={1.7} lensSize={180}>
            <Image src="/assest/chirag.png" alt="Chirag" width={120} height={120} className="mb-6 rounded-full shadow-xl object-cover" />
          </Lens>
          <Image src="/globe.svg" alt="Chirag Logo" width={64} height={64} className="mb-6 animate-spin-slow" />
          <TextReveal text="Hi, I&apos;m Chirag" className="text-4xl sm:text-6xl font-bold mb-4 text-center" />
          <p className="text-lg sm:text-2xl text-center max-w-xl mb-8">Frontend Developer specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-sky-600 dark:text-sky-400">TypeScript</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>, and <span className="font-semibold text-emerald-600 dark:text-emerald-400">Data Visualization</span> with D3.</p>
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/80 dark:bg-neutral-900/80 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-neutral-900 transition-colors font-semibold backdrop-blur">
              Resume
            </a>
            <a href="https://github.com/chirag" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors font-semibold">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto py-12 px-4 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base leading-relaxed">I&apos;m Chirag, a passionate frontend developer with a knack for building interactive, data-driven web experiences. I love transforming complex data into beautiful, intuitive UIs. My strengths lie in React, TypeScript, Tailwind CSS, and D3.js. I thrive on creative challenges and enjoy collaborating with teams to deliver impactful solutions.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-3xl mx-auto py-12 px-4 animate-slide-up">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center group">
            <GlobeIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">React</span>
          </div>
          <div className="flex flex-col items-center group">
            <WindowIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center group">
            <FileIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center group">
            <GlobeIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">D3.js</span>
          </div>
          <div className="flex flex-col items-center group">
            <WindowIcon className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Data Viz</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-12 px-4 animate-slide-up">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Example Project Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-transform group">
            <h3 className="text-xl font-semibold mb-2">DataViz Dashboard</h3>
            <p className="text-sm mb-4">A dynamic dashboard for visualizing real-time data using D3.js and React. Features interactive charts, filters, and responsive design.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">View Project →</a>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-transform group">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-sm mb-4">My personal portfolio built with Next.js, Tailwind CSS, and custom SVG micro-interactions. Optimized for performance and accessibility.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">View Project →</a>
          </div>

          {/* Mastery Project */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:scale-[1.03] transition-transform group">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Mastery Project</h3>
              <p className="font-semibold text-gray-500 mb-2">Technologies - React, Typescript, Graphql, HTML, CSS, Redux</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                <li>Mastery is an end-to-end 3PL logistics management platform which facilitates broker with real-time tracking of vehicles, load management, incident management, invoice management, task management and delivery management. It also provides a transparent view to the retailer, vendor and the supplier.</li>
                <li>Contributed to landing page & CRM</li>
                <li>Contributed to development of employee tree</li>
              </ul>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image src="/projects/mastery-project.png" alt="Mastery Project" width={180} height={120} className="rounded-lg shadow-md object-contain" />
            </div>
          </div>

          {/* Chat-App Project */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:scale-[1.03] transition-transform group">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Chat-App</h3>
              <p className="font-semibold text-gray-500 mb-2">Technologies - Webflow, Figma</p>
              <p className="text-gray-600 text-sm mb-2">Landing page design for chat app using webflow</p>
              <a href="#" className="inline-block mt-2 px-6 py-2 border border-gray-400 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition">Check This out</a>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image src="/projects/chat-app.png" alt="Chat App" width={180} height={120} className="rounded-lg shadow-md object-contain" />
            </div>
          </div>

          {/* NFT Landing Page Project */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:scale-[1.03] transition-transform group">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Landing Page Design for NFT project</h3>
              <p className="font-semibold text-gray-500 mb-2">Developed on webflow</p>
              <a href="#" className="inline-block mt-2 px-6 py-2 border border-gray-400 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition">Check This out</a>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image src="/projects/nft-landing.png" alt="NFT Landing Page" width={180} height={120} className="rounded-lg shadow-md object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-12 px-4 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="rounded-lg border px-4 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="rounded-lg border px-4 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows={4} className="rounded-lg border px-4 py-2 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </section>

      {/* Floating Dock Navigation */}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}
