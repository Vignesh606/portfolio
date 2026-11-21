export interface Project {
  id: string;
  title: string;
  status: "Completed" | "Building" | "Active" | "Research";
  period?: string;
  category: string;
  description: string;
  longDescription?: string;
  stats?: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
  link?: string;
}

export interface JobSimulation {
  company: string;
  title: string;
  issuer: string;
  description: string;
  bullets?: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badge?: string;
}

export interface Honor {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: { name: string; highlight?: boolean }[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  handle?: string;
  message: string;
  date: string;
  avatarColor: string;
}

export const portfolioData = {
  personal: {
    name: "Vignesh Madineni",
    handle: "vignesh",
    title: "CS Undergrad • Malware Analysis & Threat Detection",
    pitch: "CS undergrad specializing in malware analysis, reverse engineering, and ML-based threat detection.",
    summary:
      "Computer Science undergraduate specializing in malware analysis, reverse engineering and ML-based threat detection. Built a ResNet-101 malware classifier reaching 96.58% accuracy on 10,427 verification samples and reverse-engineered threats such as WannaCry and Venom RAT using Ghidra, IDA Pro and PEStudio. Seeking a cybersecurity internship to apply static and dynamic analysis skills to real-world defensive work.",
    location: "Anantapur, Andhra Pradesh, India",
    university: "VIT Bhopal University",
    cgpa: "7.86",
    specialization: "Cybersecurity and Digital Forensics",
    period: "2024 – 2028",
    statusText: "Open to Summer 2027 Cybersecurity Internships",
    bio: [
      "I dissect binary payloads in Ghidra, map byte distributions into computer vision classifiers, and engineer low-level systems in Rust.",
      "Serving as Web Manager, Core Committee & Recruitment Lead at BashCraft Club, with past experience engineering AI full-stack applications at TheAISignal.",
    ],
    socials: {
      email: "vigneshmadineni@gmail.com",
      github: "https://github.com/Vignesh606",
      githubUsername: "Vignesh606",
      linkedin: "https://linkedin.com/in/vigneshmadineni",
      resume: "/resume.pdf",
    },
  },

  heroHighlights: [
    {
      index: "01",
      title: "ResNet-101 Malware Classifier",
      metric: "96.58% Acc",
      description:
        "Fine-tuned ResNet-101 to classify malware from byte-mapped images, reaching 96.58% accuracy on 10,427 verification samples (trained on 30,000+).",
      badge: "Transfer Learning",
    },
    {
      index: "02",
      title: "WannaCry & Venom RAT Research",
      metric: "Kill-Switch & IOCs",
      description:
        "Dissected kill-switch domain logic, process injection, and persistence mechanisms; extracted network/host IOCs in Ghidra and PEStudio.",
      badge: "Reverse Engineering",
    },
    {
      index: "03",
      title: "Real-Time Systems & Dashboards",
      metric: "Real-time Ticks",
      description:
        "Architected financial streaming terminal broadcasting real-time market ticks over Redis Pub/Sub.",
      badge: "Distributed Systems",
    },
  ],

  experiences: [
    {
      id: "bashcraft",
      company: "BashCraft Club, VIT Bhopal",
      role: "Web Manager, Core Committee & Recruitment Lead",
      period: "2025 – 2026",
      location: "VIT Bhopal, India",
      type: "Club Leadership",
      description:
        "Directed web infrastructure, official speaker portals, and technical recruitment pipeline for BashCraft student developer community.",
      bullets: [
        "Managed web architecture and event technology for campus developer initiatives; built and launched speaker web portals for official conferences.",
        "Configured local Linux server infrastructure and led peer workshops on system diagnostics, shell scripting and developer workflows.",
        "Led technical recruitment and membership drives (Apr 2026), coordinating with faculty and student leaders.",
      ],
      skills: ["React + Vite", "PHP", "MySQL", "Linux Server", "Shell Scripting", "CSRF Hardening"],
      link: "https://github.com/Vignesh606/bashcraft-where_innovation_meets_creativity",
    },
    {
      id: "theaisignal",
      company: "TheAISignal",
      role: "AI Full Stack Developer Intern",
      period: "2025",
      location: "Remote / Hybrid",
      type: "Internship",
      description:
        "Engineered end-to-end AI applications, intelligent agent workflows, and responsive full-stack architectures.",
      bullets: [
        "Developing full-stack web architectures integrated with deep learning models and LLM agent pipelines.",
        "Building modular APIs, scalable backends, and responsive user interfaces with real-time feedback.",
        "Optimizing data pipelines and prompt execution latency for production user-facing workflows.",
      ],
      skills: ["Python", "Full Stack", "TypeScript", "AI Agents", "React", "FastAPI"],
    },
  ] as Experience[],

  jobSimulations: [
    {
      company: "Deloitte",
      title: "Cyber Security Job Simulation",
      issuer: "Forage",
      description:
        "Analyzed enterprise defense infrastructure topologies and refined incident response runbooks to reduce network compromise risk.",
      bullets: [
        "Analyzed enterprise defense infrastructure topologies and refined incident response runbooks to reduce network compromise risk.",
        "Conducted forensic log investigations and triaged high-severity security incidents across enterprise network boundaries.",
      ],
      skills: ["Enterprise Defense", "Incident Response", "Network Security", "Runbook Optimization"],
    },
    {
      company: "Mastercard",
      title: "Cybersecurity Job Simulation",
      issuer: "Forage",
      description:
        "Set up transaction monitoring logic and mapped payment data workflows to defend against fraud vectors.",
      bullets: [
        "Set up transaction monitoring logic and mapped payment data workflows to defend against fraud vectors.",
        "Evaluated payment ecosystem threat vectors and designed remediation controls for transaction integrity.",
      ],
      skills: ["Payment Security", "Threat Modeling", "Transaction Monitoring", "Fraud Defense"],
    },
    {
      company: "Tata Group",
      title: "Cybersecurity Job Simulation",
      issuer: "Forage",
      description:
        "Assessed cybersecurity controls and corporate incident mitigation runbooks across enterprise environments.",
      bullets: [
        "Assessed cybersecurity controls and enterprise incident mitigation runbooks.",
        "Examined defensive protocols and threat surface areas in corporate IT ecosystems.",
      ],
      skills: ["Enterprise Defense", "Security Posture", "Incident Mitigation"],
    },
  ] as JobSimulation[],

  projects: [
    {
      id: "malware-classifier",
      title: "Deep Learning-Driven Static Malware Analysis Framework",
      status: "Completed",
      period: "Jan 2026",
      category: "Malware & AI",
      stats: "96.58% peak accuracy • 10,427 verification samples",
      description:
        "End-to-end static detection pipeline that maps raw Windows binaries byte-by-byte into 2D grayscale images, avoiding fragile header parsing.",
      longDescription:
        "Fine-tuned ResNet-50 and ResNet-101 through transfer learning to classify polymorphic malware families; ResNet-101 reached 96.58% peak accuracy. Trained on 30,000+ executable samples and validated on 10,427 verification samples. Developed a Flask dashboard for executable upload, automatic image conversion, and threat diagnostic reports. Added steganography detection for micro-perturbations in carrier images and a password resilience analyzer (Shannon entropy, pattern matching) built for the Cyber Carnival 2026 hackathon.",
      tech: ["Python", "PyTorch", "TensorFlow", "Flask", "ResNet-101", "Transfer Learning", "Steganography"],
      github: "https://github.com/Vignesh606/Spyware",
      image: "/images/malware_matrix_pipeline.jpg",
      featured: true,
    },
    {
      id: "wannacry-venom-research",
      title: "Advanced Threat Research & Metadata Forensics",
      status: "Research",
      period: "Jul – Sep 2025",
      category: "Reverse Engineering",
      stats: "Kill-Switch Dissection • Control Flow & IOCs",
      description:
        "Static analysis and behavioral mapping of WannaCry ransomware, Venom RAT, and multi-stage evasion loaders.",
      longDescription:
        "Performed static analysis and behavioral mapping of WannaCry ransomware, Venom RAT and multi-stage evasion loaders. Extracted Indicators of Compromise (IOCs) from Portable Executable headers using PEStudio and IDA Pro. Reverse-engineered WannaCry's kill-switch domain mechanism, documented embedded cryptocurrency wallet addresses, and mapped execution control flow.",
      tech: ["IDA Pro", "Ghidra", "PEStudio", "x64dbg", "PE Architecture", "IOC Extraction", "Threat Forensics"],
      github: "https://github.com/Vignesh606",
      image: "/images/ghidra_decompilation.jpg",
      featured: true,
    },
    {
      id: "bashcraft-platform",
      title: "BashCraft Club Backend Portal & Speaker Web Portals",
      status: "Completed",
      period: "2025 – 2026",
      category: "Web Security & Systems",
      stats: "CSRF Hardened • Live System Health",
      description:
        "Secure PHP and MySQL portal with CSRF protection, prepared statements, a live system-health footer, and a terminal-style interface.",
      longDescription:
        "Managed web architecture for campus developer initiatives; built and launched speaker web portals for official campus conferences in React + Vite. Engineered secure PHP and MySQL backend portal with CSRF protection, prepared statements (SQL injection prevention), session tokens, and a live system-health footer.",
      tech: ["React 18", "Vite", "PHP", "MySQL", "Linux Server", "CSRF Protection", "Terminal UI"],
      github: "https://github.com/Vignesh606/bashcraft-where_innovation_meets_creativity",
      featured: true,
    },
    {
      id: "financial-terminal",
      title: "Real-Time Financial Streaming Terminal",
      status: "Completed",
      category: "Distributed Systems",
      stats: "Real-time Market Ticks over Redis Pub/Sub",
      description:
        "Bloomberg-style live market dashboard with order book depth charts, tick virtualization, and streaming analytics.",
      longDescription:
        "Engineered Fastify server with Redis Pub/Sub for broadcasting real-time market ticks to concurrent React clients with zero frame drops.",
      tech: ["React 18", "TypeScript", "Fastify", "Redis Pub/Sub", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/Vignesh606",
      featured: true,
    },
    {
      id: "rust-db",
      title: "RustDB Relational Storage Engine",
      status: "Building",
      category: "Systems Programming",
      stats: "B+ Tree • Disk Page Manager • WAL",
      description:
        "Disk-backed relational database internals built in Rust from first principles.",
      longDescription:
        "Implemented disk page storage manager, B+ tree indexing, and Write-Ahead Logging (WAL) for transactional crash recovery.",
      tech: ["Rust", "B+ Tree", "WAL", "Page Manager", "Database Storage"],
      github: "https://github.com/Vignesh606/RUST-DB",
      featured: true,
    },
    {
      id: "college-mgmt",
      title: "College Management System",
      status: "Completed",
      category: "Backend Architecture",
      stats: "Same API built across three backends",
      description:
        "Enterprise CRUD system implemented across Node.js, FastAPI, and Java Spring Boot with a shared MongoDB schema.",
      longDescription:
        "Standardized schema and endpoints across Node/Express, FastAPI, and Java Spring Boot to explore framework ergonomics and backend conventions.",
      tech: ["Node.js", "FastAPI", "Spring Boot", "Java", "MongoDB", "Docker"],
      github: "https://github.com/Vignesh606/campus-portal",
      featured: false,
    },
    {
      id: "particle-engine",
      title: "Gesture-Controlled 3D Particle Engine",
      status: "Completed",
      category: "Creative Dev",
      stats: "Three.js + MediaPipe Hand Tracking",
      description:
        "Real-time interactive 3D particle system morphing geometries via camera hand gestures.",
      longDescription:
        "Combines MediaPipe hand landmarks with custom Three.js WebGL particle physics for zero-touch browser interaction.",
      tech: ["Three.js", "MediaPipe", "WebGL", "JavaScript"],
      github: "https://github.com/Vignesh606/Real-Time-Gesture-Controlled-Particle-Engine",
      featured: false,
    },
  ] as Project[],

  skills: [
    {
      category: "Malware Analysis & RE",
      items: [
        { name: "Static & Dynamic Analysis", highlight: true },
        { name: "Ghidra", highlight: true },
        { name: "IDA Pro", highlight: true },
        { name: "x64dbg", highlight: true },
        { name: "PEStudio", highlight: true },
        { name: "PE Architecture", highlight: true },
        { name: "IOC Extraction", highlight: true },
        { name: "Steganography", highlight: false },
        { name: "Information Entropy", highlight: false },
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Deep Learning", highlight: true },
        { name: "Computer Vision", highlight: true },
        { name: "PyTorch", highlight: true },
        { name: "TensorFlow", highlight: true },
        { name: "ResNet-50 / 101", highlight: true },
        { name: "DCGANs", highlight: false },
        { name: "Dataset Engineering", highlight: false },
        { name: "Transfer Learning", highlight: true },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Java (DSA & OOP)", highlight: true },
        { name: "C++", highlight: true },
        { name: "Python", highlight: true },
        { name: "Rust", highlight: true },
        { name: "SQL", highlight: true },
        { name: "8086 Assembly", highlight: true },
        { name: "Bash", highlight: true },
        { name: "TypeScript / JavaScript", highlight: false },
      ],
    },
    {
      category: "Databases & Secure Dev",
      items: [
        { name: "MySQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "CSRF Protection", highlight: true },
        { name: "Prepared Statements (SQLi)", highlight: true },
        { name: "Flask", highlight: true },
        { name: "LAMP Stack", highlight: false },
        { name: "HTML5 / CSS3", highlight: false },
        { name: "FastAPI / Node.js", highlight: false },
      ],
    },
    {
      category: "Systems & Tools",
      items: [
        { name: "Linux (Arch, Kali, Tails OS)", highlight: true },
        { name: "Virtualization", highlight: true },
        { name: "Network Diagnostics", highlight: true },
        { name: "Git & GitHub", highlight: true },
        { name: "Docker", highlight: false },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      institution: "VIT Bhopal University",
      degree: "B.Tech, Computer Science and Engineering",
      specialization: "Cybersecurity and Digital Forensics",
      cgpa: "7.86",
      period: "2024 – 2028",
      location: "Bhopal, India",
      coursework: [
        "Data Structures & Algorithms in Java",
        "Advanced Java Foundations",
        "Database Management Systems (SQL & MongoDB)",
        "Systems Programming",
        "Operating Systems (Linux)",
        "Deep Learning",
      ],
    },
  ],

  certifications: [
    {
      title: "Java Foundations Associate",
      issuer: "Oracle",
      date: "2026",
      badge: "Core Java & OOP",
    },
    {
      title: "MongoDB — FACE Prep",
      issuer: "FACE Prep",
      date: "2026",
      badge: "Course Certificate",
    },
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      date: "2026",
      badge: "National Defense",
    },
    {
      title: "Cybersecurity Basics",
      issuer: "IBM Security",
      date: "Jan 2025",
      badge: "Enterprise Security",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Jan 2025",
      badge: "Network Defense",
    },
    {
      title: "Advent of Cyber '25",
      issuer: "TryHackMe",
      date: "2025",
      credentialId: "THMY6MHLQ9KXQ",
      badge: "Offensive Security",
    },
    {
      title: "MATLAB Onramp & Foundations",
      issuer: "MathWorks",
      date: "Aug 2024",
      badge: "Scientific Computing",
    },
  ] as Certification[],

  honors: [
    {
      title: "National Financial Literacy Quiz — Round 1 Qualifier",
      organization: "SEBI (Securities and Exchange Board of India)",
      date: "Dec 2025",
      description: "Cleared Round 1 nationally in SEBI's nationwide financial regulatory and literacy examination.",
    },
    {
      title: "Cyber Carnival 2026 Hackathon Competitor",
      organization: "VIT Cyber Carnival Hackathon",
      date: "Jan 2026",
      description: "Built steganography detection for micro-perturbations in carrier images and a Shannon entropy password resilience analyzer.",
    },
    {
      title: "India Space Week Participant",
      organization: "ISRO (Indian Space Research Organisation)",
      date: "Apr 2025",
      description: "Selected participant for ISRO Space Applications, aerospace systems engineering, and payload telemetry sessions.",
    },
    {
      title: "LibreOffice Open-Source Governance Report",
      organization: "Open Source Research",
      date: "Jul 2025",
      description: "Authored an in-depth open-source governance and architecture report analyzing LibreOffice's modular software evolution.",
    },
  ] as Honor[],

  music: {
    tagline: "from Sid Sriram to Kendrick Lamar, no skips",
    embedUrl: "https://open.spotify.com/embed/playlist/460oHGJ5hs7RmcXBp08PaJ?utm_source=generator&theme=0",
    playlistUrl: "https://open.spotify.com/playlist/460oHGJ5hs7RmcXBp08PaJ",
    onRepeat: {
      title: "m y . l i f e",
      artist: "J. Cole feat. 21 Savage & Morray",
      album: "The Off-Season (2021)",
      trackUrl: "https://open.spotify.com/track/1DYoumfaWzqicECjTLe9dl",
      embedUrl: "https://open.spotify.com/embed/track/1DYoumfaWzqicECjTLe9dl?utm_source=generator&theme=0",
    },
    stats: {
      tracks: 286,
      artists: 227,
    },
    scenes: ["Hip-hop", "Indie & Alt", "Tamil & Melodic", "Pop", "Classics", "Global"],
    topArtists: [
      "Kendrick Lamar",
      "Sid Sriram",
      "J. Cole",
      "21 Savage",
      "Eminem",
      "Kanye West",
      "The Weeknd",
      "Travis Scott",
      "XXXTENTACION",
      "Arctic Monkeys",
      "The Smiths",
      "Dua Lipa",
      "Coldplay",
      "Imagine Dragons",
      "Billie Eilish",
      "Drake",
      "Future",
      "Post Malone",
      "Frank Ocean",
      "Lana Del Rey",
      "Daft Punk",
      "Radiohead",
      "A$AP Rocky",
      "Childish Gambino",
    ],
    remainingArtistsCount: 35,
  },
};
