export const personalInfo = {
  name: "ANKIT KUMAR MISHRA",
  title: "Full Stack Developer",
  shortDescription: "Passionate about creating innovative solutions with modern technologies",
  description:
    "Motivated Full Stack Developer with experience in React, Next.js, Flask, FastAPI, and programming languages like Python, C, C++, and Java. Proficient in MySQL and MongoDB, with a strong foundation in OOPS, DBMS, and Data Structures.",
  email: "ankit.kumar.mishra2006@gmail.com",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-mishra-0509982a5/",
  github: "https://github.com/ankitmishra2006",
  codolio: "https://codolio.com/profile/ankitmishra",
  resume: "https://drive.google.com/file/d/1pPD2jW4DdLCgFev8Id4vw0YXMUTL9ZmK/view?usp=drive_link",
}

export const emailConfig = {
  apiUrl: "https://mail-sender-snowy.vercel.app/api/send-email",
  recipientEmail: "ankit.kumar.mishra2006@gmail.com",
}

export const skills = [
  { name: "Python", level: 88, color: "#3776AB", category: "Programming" },
  { name: "JavaScript", level: 90, color: "#F7DF1E", category: "Programming" },
  { name: "TypeScript", level: 85, color: "#3178C6", category: "Programming" },
  { name: "Java", level: 82, color: "#ED8B00", category: "Programming" },
  { name: "C/C++", level: 90, color: "#00599C", category: "Programming" },
  { name: "React", level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", level: 85, color: "#000000", category: "Frontend" },
  { name: "Three.js", level: 75, color: "#049EF4", category: "Frontend" },
  { name: "GSAP", level: 70, color: "#88CE02", category: "Frontend" },
  { name: "Node.js", level: 80, color: "#339933", category: "Backend" },
  { name: "FastAPI", level: 75, color: "#009688", category: "Backend" },
  { name: "Flask", level: 80, color: "#000000", category: "Backend" },
  { name: "MongoDB", level: 78, color: "#47A248", category: "Database" },
  { name: "MySQL", level: 85, color: "#4479A1", category: "Database" },
  { name: "SQLite", level: 85, color: "#003B57", category: "Database" },
  { name: "PostgreSQL", level: 85, color: "#336791", category: "Database" },
  { name: "GitHub", level: 85, color: "#181717", category: "Tools" },
  { name: "Postman", level: 85, color: "#FF6C37", category: "Tools" },
  { name: "Docker", level: 75, color: "#2496ED", category: "Tools" },
  { name: "Machine Learning", level: 70, color: "#FF6F00", category: "Learning" },
  { name: "React Native", level: 65, color: "#61DAFB", category: "Learning" },
  { name: "Linux", level: 80, color: "#FCC624", category: "Learning" },
]

export const projects = [
  {
    id: 1,
    name: "Resumind",
    description:
      "An AI-powered resume analysis platform that provides users with real-time ATS scores and personalized improvement suggestions based on job descriptions.",
    longDescription:
      "Resumind is a full-stack web application built to help job seekers optimize their resumes for Applicant Tracking Systems (ATS). Users can upload a PDF resume, specify job details, and receive immediate AI feedback including overall scoring, categorized suggestions (tone, structure, skills, content), and a visual breakdown. It uses OpenAI-compatible models, file system emulation (puter.js), real-time PDF to image conversion, and a custom scoring engine for deep resume analysis.",
    tech: [
      "React.js",
      "TypeScript",
      "Puter.js",
      "Tailwind CSS",
      "OpenAI API",
      "Vite",
      "Zustand",
      "PDF.js",
      "Remix Router",
    ],
    features: [
      "Resume upload with real-time PDF to image preview",
      "AI-powered feedback across five resume categories",
      "ATS scoring engine with visual score gauges and badges",
      "Secure user authentication and session management",
      "Persistent resume storage and management",
      "Dynamic tips and suggestions categorized as 'good' or 'improve'",
      "Responsive UI with accessible design and animations",
    ],
    color: "#9C27B0",
    gradient: "from-purple-400 to-purple-600",
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    name: "Converso",
    description:
      "A real-time AI chatbot built with OpenAI API and web sockets, designed to mimic human-like conversation and maintain chat history across sessions.",
    longDescription:
      "Converso is a real-time AI-powered chatbot that offers natural and responsive conversations using OpenAI's language models. The project includes persistent chat history using local storage, a responsive UI, and socket-based real-time communication. Built with TypeScript, Zustand for state management, and Tailwind CSS for styling, Converso focuses on user experience, clean interface, and performance optimization. It also includes loading indicators, markdown support, and dynamic UI feedback for seamless interaction.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Socket.IO", "OpenAI API", "Vite", "Marked.js"],
    features: [
      "Real-time two-way communication using WebSockets",
      "Chat history persistence using local storage",
      "OpenAI-powered dynamic responses",
      "Markdown rendering with syntax highlighting",
      "User input debouncing and loading indicators",
      "Minimalist and responsive UI with dark mode support",
      "Typing animations and interaction cues",
    ],
    color: "#00BCD4",
    gradient: "from-cyan-400 to-cyan-600",
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    name: "WanderLust",
    description:
      "A comprehensive travel planning web application built with Express.js that enables users to browse destinations, create personalized itineraries, and receive AI-powered recommendations based on preferences and budget.",
    longDescription:
      "WanderLust is a full-featured travel planning platform that combines modern web technologies with intuitive design. The application features secure user authentication using cookies and session management, allowing travelers to save and manage their travel plans across sessions. Built with a robust RESTful API architecture, it handles complex data operations for destinations, user preferences, and booking integrations.",
    tech: ["Express.js", "Bootstrap", "MongoDB", "Authentication", "RESTful APIs", "Session Management"],
    features: [
      "User authentication with secure session management",
      "Interactive destination browsing with filters",
      "Personalized itinerary creation and management",
      "AI-powered travel recommendations",
      "Responsive design for all devices",
      "Real-time data synchronization",
    ],
    color: "#4CAF50",
    gradient: "from-green-400 to-green-600",
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    id: 4,
    name: "Article Summarizer Extension",
    description:
      "An intelligent browser extension that leverages Google's Gemini API to provide instant article summarization in multiple formats including brief overviews, detailed summaries, and structured bullet points.",
    longDescription:
      "This Chrome extension revolutionizes how users consume online content by providing instant, AI-powered article summarization. The extension integrates seamlessly with the browser, offering a clean popup interface that processes articles in real-time. Users can choose from three summarization modes: brief for quick overviews, detailed for comprehensive understanding, and bullet points for structured information.",
    tech: ["JavaScript", "Gemini API", "Chrome Extension APIs", "HTML/CSS", "Manifest V3"],
    features: [
      "Three summarization modes (brief, detailed, bullet points)",
      "Real-time article processing",
      "Clean, intuitive popup interface",
      "Support for multiple article formats",
      "Offline capability for cached summaries",
      "Privacy-focused design with local processing",
    ],
    color: "#2196F3",
    gradient: "from-blue-400 to-blue-600",
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    id: 5,
    name: "Sonic Runner",
    description:
      "An engaging 2D endless runner game developed with the Kaplay library, featuring dynamic gameplay mechanics, progressive difficulty scaling, and immersive visual effects that create an addictive gaming experience.",
    longDescription:
      "Sonic Runner represents a modern take on the classic endless runner genre, built entirely with JavaScript and the Kaplay game development library. The game features sophisticated collision detection, smooth character animations, and a dynamic scoring system that adapts to player performance. With carefully crafted game physics and responsive controls, it delivers a console-quality gaming experience in the browser.",
    tech: ["Kaplay Library", "JavaScript", "2D Graphics", "Game Physics", "Canvas API"],
    features: [
      "Smooth character movement and jumping mechanics",
      "Dynamic obstacle generation and collision detection",
      "Progressive difficulty scaling",
      "High-score tracking and leaderboards",
      "Immersive sound effects and background music",
      "Responsive controls for multiple input methods",
    ],
    color: "#FF9800",
    gradient: "from-orange-400 to-orange-600",
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
]

export const experiences = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Compassion Academy",
    period: "June '25 — Jul '25",
    description:
      "Analyzed educational data and student performance metrics to optimize learning outcomes. Developed data-driven insights for curriculum improvement and created interactive dashboards for tracking student progress and engagement.",
    type: "work",
    skills: ["Data Analysis", "Python", "Excel", "Dashboard Creation", "Statistical Analysis"],
    achievements: [
      "Improved student performance tracking by 40%",
      "Created automated reporting systems",
      "Developed predictive models for student success",
    ],
  },
  {
    id: 2,
    title: "Member",
    company: "Microsoft Student Chapter Club of MSIT",
    period: "Sep '24 — Present",
    description:
      "Active member of the Microsoft Student Chapter, participating in technical workshops, hackathons, and community events. Contributing to open-source projects and mentoring junior students in modern development practices.",
    type: "organization",
    skills: ["Leadership", "Community Building", "Technical Mentoring", "Event Organization"],
    achievements: [
      "Organized 5+ technical workshops",
      "Mentored 20+ junior students",
      "Led 3 successful hackathon teams",
    ],
  },
  {
    id: 3,
    title: "B.Tech in Computer Science Engineering",
    company: "Maharaja Surajmal Institute of Technology",
    period: "Aug '23 — Present",
    description:
      "Currently pursuing Bachelor's degree with CGPA: 8.265. Focusing on advanced programming concepts, data structures, algorithms, software engineering principles, and emerging technologies like AI/ML.",
    type: "education",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Software Engineering",
      "Database Management",
      "Operating Systems",
      "Computer Networks",
      "AI/ML",
    ],
    achievements: ["Maintained 8.265 CGPA", "Completed 15+ technical projects", "Active in coding competitions"],
  },
]

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export const colorTheme = {
  primary: {
    cyan: "#00F5FF",
    purple: "#8A2BE2",
    pink: "#FF1493",
    orange: "#FF8C00",
  },
  gradients: {
    primary: "from-cyan-400 via-purple-500 to-pink-500",
    secondary: "from-purple-400 to-pink-500",
    accent: "from-orange-400 to-red-500",
    success: "from-green-400 to-emerald-500",
    info: "from-blue-400 to-cyan-500",
  },
}
