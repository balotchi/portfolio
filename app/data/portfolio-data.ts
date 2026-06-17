import { MonitorSmartphone, ShieldAlert, Wrench, Code2, Terminal, Network } from "lucide-react";

export const portfolioData = {
  header: {
    name: "Lance Achacoso",
    role: "Full Stack Developer & Technical Support Engineer",
    bio: "Full-Stack Web Developer, Technical Support Specialist, and Cybersecurity Enthusiast with experience in API investigation, log analysis, penetration testing, system troubleshooting, and web application development. Skilled in React.js, modern web technologies, operating systems, hardware support, and security-focused problem-solving, with a strong commitment to delivering efficient, secure, and reliable solutions.",
    socials: {
      email: "mailto:lanceachacoso01@gmail.com", // TODO: Update with your real email
      github: "https://github.com/balotchi", // TODO: Update with your real GitHub
      linkedin: "https://linkedin.com/in/lance-achacoso-035367415", // TODO: Update with your real LinkedIn
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
      title: "Cybersecurity / Penetration Testing",
      description: "Two-time participant in DICT technical hacking and cybersecurity competitions.",
      icon: ShieldAlert,
      size: "medium",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
    },
    {
      title: "API & Log Investigation",
      description: "Deep-dive troubleshooting of API communications, analyzing system logs, and diagnosing complex technical issues.",
      icon: Network,
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
  // NEW SECTION: Your timeline data
  experience: [
    {
      role: "Technical Support Engineer",
      company: "QTech Games",
      date: "2026 - Present",
      description: "Investigate and resolve complex technical issues through API communication analysis and detailed log investigation, identifying root causes and ensuring system reliability. Utilize critical thinking and troubleshooting skills to diagnose integration, performance, and application-related problems efficiently.",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Independent",
      date: "2024 - Present",
      description: "Designing and building custom web applications for clients, focusing on modern React architectures, responsive design, and seamless user experiences.",
    },
    {
      role: "IT Specialist",
      company: "Manpower Outsourcing Services Inc. / Huawei Technologies Philippines ",
      date: "2025 - 2026",
      description: "Managed IT asset lifecycle processes, including employee onboarding and offboarding, by provisioning, configuring, and decommissioning company devices and user accounts. Provided technical support through hardware troubleshooting, laptop repair, operating system installation, software deployment, system maintenance, and diagnostics to ensure optimal system performance, security, and end-user productivity.",
    },
    {
      role: "Cybersecurity Competitor",
      company: "DICT Hack4Gov 2 & 3 Competition",
      date: "2023 & 2024",
      description: "Competed in two regional technical hacking and penetration testing competitions hosted by the Department of Information and Communications Technology (DICT).",
    }
  ]
};