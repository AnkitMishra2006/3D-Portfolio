export const personalInfo = {
  name: "ANKIT KUMAR MISHRA",
  title: "Full Stack Developer",
  shortDescription: "Passionate about creating innovative solutions with modern technologies",
  description:
    "Motivated Full Stack Developer with experience in React, Next.js, Flask, FastAPI, and programming languages like Python, C, C++, and Java. Proficient in MySQL and MongoDB, with a strong foundation in OOPS, DBMS, and Data Structures.",
  email: "ankit.kumar.mishra2006@gmail.com",
  location: "Delhi, India",
  linkedin: "https://linkedin.com/in/ankit-kumar-mishra",
  github: "https://github.com/ankitmishra2006",
  codolio: "https://codolio.com/profile/ankitmishra",
  resume: "https://drive.google.com/file/d/1pPD2jW4DdLCgFev8Id4vw0YXMUTL9ZmK/view?usp=drive_link",
}

export const emailConfig = {
  apiUrl: "https://mail-sender-snowy.vercel.app/api/send-email",
  recipientEmail: "ankit.kumar.mishra2006@gmail.com",
}

export const skills = [
  { name: "React", level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", level: 85, color: "#000000", category: "Frontend" },
  { name: "Three.js", level: 75, color: "#000000", category: "3D" },
  { name: "Python", level: 88, color: "#3776AB", category: "Backend" },
  { name: "Java", level: 82, color: "#ED8B00", category: "Programming" },
  { name: "JavaScript", level: 90, color: "#F7DF1E", category: "Programming" },
  { name: "Node.js", level: 80, color: "#339933", category: "Backend" },
  { name: "MongoDB", level: 78, color: "#47A248", category: "Database" },
  { name: "MySQL", level: 85, color: "#4479A1", category: "Database" },
  { name: "FastAPI", level: 75, color: "#009688", category: "Backend" },
  { name: "Flask", level: 80, color: "#000000", category: "Backend" },
  { name: "GSAP", level: 70, color: "#88CE02", category: "Animation" },
]

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    period: "May '23 — Jul '23",
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
      "Currently pursuing Bachelor's degree with GPA: 8.092. Focusing on advanced programming concepts, data structures, algorithms, software engineering principles, and emerging technologies like AI/ML and cloud computing.",
    type: "education",
    skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Management", "AI/ML"],
    achievements: ["Maintained 8.092 GPA", "Completed 15+ technical projects", "Active in coding competitions"],
  },
]

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]
