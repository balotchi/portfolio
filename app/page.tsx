import Image from "next/image";
import { portfolioData } from "./data/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, ArrowRight } from "lucide-react";

// Custom SVG for GitHub
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.02 5.02 0 0 0 19 4.65a4.9 4.9 0 0 0-.1-3.2s-1.03-.33-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.12 6.2 1.45 6.2 1.45a4.9 4.9 0 0 0-.1 3.2A5.02 5.02 0 0 0 4.5 7.8c0 5.76 3.34 6.78 6.5 7.16A4.8 4.8 0 0 0 10 18v4" />
  </svg>
);

// Custom SVG for LinkedIn
const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="w-full pb-20">
      
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center mb-16 md:mb-24">
        <div className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-zinc-100">
          LA<span className="text-emerald-500">.</span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Immersive Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mb-32 gap-12 lg:gap-8 relative">
        
        {/* Decorative background blur (subtle glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] -z-10 rounded-full" />

        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Open for Freelance Website Projects
          </div>

          {/* Typography Hierarchy */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{portfolioData.header.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-semibold tracking-tight">
              {portfolioData.header.role}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0">
              {portfolioData.header.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href={portfolioData.header.socials.email}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Mail size={18} />
              <span>Get in touch</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              <a 
                href={portfolioData.header.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:border-emerald-500/50 hover:text-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={22} />
              </a>
              <a 
                href={portfolioData.header.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:border-emerald-500/50 hover:text-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side: Profile Image with glowing ring */}
        <div className="relative group w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 z-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>
          <Image 
            src="/profile.png" 
            alt={portfolioData.header.name}
            fill 
            sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
            priority
            className="object-cover rounded-full shadow-2xl border-4 border-white dark:border-zinc-900 transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-2 ring-1 ring-zinc-200 dark:ring-zinc-800"
          />
        </div>
      </section>

      {/* Capabilities / Bento Grid Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Capabilities & Expertise
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            A cross-functional approach to software and systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {portfolioData.bentoItems.map((item, index) => {
            let spanClass = "col-span-1";
            if (item.size === "large") spanClass = "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
            if (item.size === "medium") spanClass = "col-span-1 md:col-span-2";

            return (
              <div
                key={index}
                className={`
                  group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 
                  bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 
                  hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500
                  bento-glow ${spanClass} shadow-sm hover:shadow-xl hover:shadow-emerald-500/5
                `}
              >
                <div className="z-10 h-full flex flex-col">
                  <div className={`inline-flex p-3 rounded-xl border mb-6 w-max transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.color}`}>
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Refined gradient mask for bento cards */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}