import { MonitorSmartphone, ShieldAlert, Wrench, Code2, Terminal, Network } from "lucide-react";

export const portfolioData = {
  header: {
    name: "Lance Achacoso",
    role: "Full Stack Developer & Technical Support Engineer",
    bio: "Bridging the gap between software development and systems engineering. From building modern web applications to hardware repair and competitive cybersecurity.",
    // Update these links with your actual URLs
    socials: {
      email: "mailto:your.email@example.com", 
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    }
  },
  bentoItems: [
    {
      title: "Full Stack Web Development",
      description: "Building scalable, responsive applications using React, Next.js, and Node.",
      icon: Code2,
      size: "large",
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    {
      title: "Cybersecurity & DICT",
      description: "Two-time participant in DICT technical hacking and cybersecurity competitions.",
      icon: ShieldAlert,
      size: "medium",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
    },
    {
      title: "API & Log Investigation",
      description: "Deep-dive troubleshooting of API communications, analyzing system logs, and diagnosing complex technical issues.",
      icon: Network, // Changed the icon to Network to better represent API routing
      size: "medium",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      title: "OS Administration",
      description: "Proficient in Linux, macOS, and Windows system environments.",
      icon: Terminal,
      size: "small",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Hardware Repair",
      description: "Hands-on component-level diagnostics and repair for laptops and PCs.",
      icon: Wrench,
      size: "small",
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    {
      title: "Cross-Platform Optimization",
      description: "Ensuring software runs flawlessly regardless of hardware or OS constraints.",
      icon: MonitorSmartphone,
      size: "medium",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
  ],
};