export const personalInfo = {
  name: "ANKIT KUMAR MISHRA",
  title: "Full Stack Developer",
  shortDescription:
    "Passionate about creating innovative solutions with modern technologies",
  description:
    "Motivated Full Stack Developer with experience in React, Next.js, Flask, FastAPI, and programming languages like Python, C, C++, and Java. Proficient in MySQL and MongoDB, with a strong foundation in OOPS, DBMS, and Data Structures.",
  email: "ankit.kumar.mishra2006@gmail.com",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-mishra-0509982a5/",
  github: "https://github.com/ankitmishra2006",
  codolio: "https://codolio.com/profile/ankitmishra",
  resume:
    "https://drive.google.com/file/d/1pPD2jW4DdLCgFev8Id4vw0YXMUTL9ZmK/view?usp=drive_link",
};

export const emailConfig = {
  apiUrl: "https://mail-sender-snowy.vercel.app/api/send-email",
  recipientEmail: "ankit.kumar.mishra2006@gmail.com",
};

export const skills = [
  { name: "Python", color: "#3776AB", category: "Programming" },
  { name: "JavaScript", color: "#F7DF1E", category: "Programming" },
  { name: "TypeScript", color: "#3178C6", category: "Programming" },
  { name: "Java", color: "#ED8B00", category: "Programming" },
  { name: "C/C++", color: "#00599C", category: "Programming" },
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#ffffff", category: "Frontend" },
  { name: "Three.js", color: "#ffffff", category: "Frontend" },
  { name: "GSAP", color: "#88CE02", category: "Frontend" },
  { name: "Node.js", color: "#339933", category: "Backend" },
  { name: "FastAPI", color: "#009688", category: "Backend" },
  { name: "Flask", color: "#e74c3c", category: "Backend" },
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "MySQL", color: "#4479A1", category: "Database" },
  { name: "SQLite", color: "#003B57", category: "Database" },
  { name: "PostgreSQL", color: "#336791", category: "Database" },
  { name: "GitHub", color: "#f39c12", category: "Tools" },
  { name: "Postman", color: "#FF6C37", category: "Tools" },
  { name: "Docker", color: "#2496ED", category: "Tools" },
  {
    name: "Machine Learning",
    color: "#FF6F00",
    category: "Currently Learning",
  },
  { name: "React Native", color: "#61DAFB", category: "Currently Learning" },
  { name: "Linux", color: "#FCC624", category: "Currently Learning" },
];

export const projects = [
  {
    id: 1,
    name: "WanderLust",
    description:
      "A comprehensive travel planning web application built with Express.js that enables users to browse destinations, create personalized itineraries, and receive AI-powered recommendations based on preferences and budget.",
    longDescription:
      "WanderLust is a full-featured travel planning platform that combines modern web technologies with intuitive design. The application features secure user authentication using cookies and session management, allowing travelers to save and manage their travel plans across sessions. Built with a robust RESTful API architecture, it handles complex data operations for destinations, user preferences, and booking integrations.",
    tech: [
      "Node.js",
      "Express.js",
      "Bootstrap",
      "MongoDB",
      "Authentication",
      "RESTful APIs",
      "Session Management",
    ],
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
    demoUrl: "https://wanderlust-zox7.onrender.com/listings",
    githubUrl: "https://github.com/AnkitMishra2006/WanderLust",
    status: "Completed",
  },

  {
    id: 2,
    name: "Sonic Runner",
    description:
      "An engaging 2D endless runner game developed with the Kaplay library, featuring dynamic gameplay mechanics, progressive difficulty scaling, and immersive visual effects that create an addictive gaming experience.",
    longDescription:
      "Sonic Runner represents a modern take on the classic endless runner genre, built entirely with JavaScript and the Kaplay game development library. The game features sophisticated collision detection, smooth character animations, and a dynamic scoring system that adapts to player performance. With carefully crafted game physics and responsive controls, it delivers a console-quality gaming experience in the browser.",
    tech: ["Kaplay", "JavaScript", "2D Graphics", "Game Physics"],
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
    demoUrl: "https://sonic-runner06.netlify.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Sonic-Runner",
    status: "Completed",
  },
  {
    id: 3,
    name: "Resumind",
    description:
      "An AI-powered resume analyzer that evaluates PDF resumes based on ATS compatibility and key hiring criteria, providing instant feedback and improvement tips to job seekers.",
    longDescription:
      "Resumind is a full-stack AI tool designed to help users optimize their resumes for modern hiring systems. By uploading a PDF resume and providing job-specific details, users receive a comprehensive analysis that includes ATS score, tone/style feedback, content suggestions, structure improvements, and skill highlights. The application uses Claude 3 for natural language understanding, and features a highly responsive UI built with React and Vite. Secure file handling and analysis are powered by Puter.js. Resumind empowers users to craft job-winning resumes with real-time insights and visual feedback.",
    tech: [
      "React",
      "Vite",
      "Puter.js",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Zustand",
    ],
    features: [
      "AI-powered resume analysis using Claude 3",
      "Instant ATS scoring out of 100",
      "Detailed feedback on tone, content, structure, and skills",
      "PDF upload with preview and validation",
      "Dynamic resume scoring gauges and badges",
      "Secure cloud storage and authentication with Puter.js",
      "Responsive and modern UI with Tailwind CSS",
      "User dashboard to track multiple resumes",
      "Real-time status feedback during analysis",
    ],
    color: "#6366F1",
    gradient: "from-indigo-400 to-indigo-600",
    demoUrl: "https://resumind-resume-analyzer.vercel.app/auth",
    githubUrl: "https://github.com/AnkitMishra2006/Resumind",
    status: "Completed",
  },
  {
    id: 4,
    name: "Converso",
    description:
      "A powerful platform that allows users to build personalized AI chatbots (companions) trained on specific topics, enabling interactive voice and text-based learning.",
    longDescription:
      "Converso is an AI-powered learning assistant builder where users can create custom chatbot companions focused on specific topics of their choice. Each companion responds to user queries in real-time via voice or text using Vapi's AI agent capabilities. The platform incorporates Clerk for secure user authentication and subscription management, offering a premium SaaS experience. Converso features a clean and modern UI with full support for dynamic companion creation, personalized interaction, and scalable monetization. Ideal for learners, educators, and creators who want to build their own AI tutors or micro-teaching bots.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vapi",
      "Clerk",
      "Tailwind CSS",
      "Zustand",
      "Vercel",
    ],
    features: [
      "Create AI companions trained on specific topics",
      "Voice and text-based conversation powered by Vapi",
      "Secure user authentication with Clerk",
      "Subscription system using Clerk Billing",
      "Real-time learning assistant experiences",
      "Modern, responsive UI with clean UX",
      "Dashboard to manage multiple companions",
      "Custom prompts and persistent chat context",
      "Scalable and cloud-ready deployment",
    ],
    color: "#10B981",
    gradient: "from-emerald-400 to-emerald-600",
    demoUrl: "https://converso-six.vercel.app",
    githubUrl: "https://github.com/AnkitMishra2006/Converso",
    status: "Completed",
  },
  {
    id: 5,
    name: "Article Summarizer Extension",
    description:
      "An intelligent browser extension that leverages Google's Gemini API to provide instant article summarization in multiple formats including brief overviews, detailed summaries, and structured bullet points.",
    longDescription:
      "This Chrome extension revolutionizes how users consume online content by providing instant, AI-powered article summarization. The extension integrates seamlessly with the browser, offering a clean popup interface that processes articles in real-time. Users can choose from three summarization modes: brief for quick overviews, detailed for comprehensive understanding, and bullet points for structured information.",
    tech: [
      "JavaScript",
      "Gemini API",
      "Chrome Extension APIs",
      "HTML/CSS",
      "Manifest V3",
    ],
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
    demoUrl:
      "https://drive.google.com/file/d/1y1uShnFD_tyRpvQx387UNsI2Z4ZkH-Uc/view?usp=sharing",
    githubUrl: "https://github.com/AnkitMishra2006/Article-Summarizer",
    status: "Completed",
  },
  {
    id: 6,
    name: "WhisprNote - Anonymous Feedback Web App",
    description:
      "A real-time anonymous messaging platform with email verification, smart AI suggestions, and customizable feedback settings — built for secure, private communication.",
    longDescription:
      "WhisprNote is a full-stack web app designed to let users collect anonymous feedback through a unique shareable link. Upon registration, users verify their email using a secure OTP system powered by Mailtrap. After verification, they receive a personal link where anyone can send them messages without logging in. Real-time updates are delivered via Socket.io, and Hugging Face's free LLM provides message suggestions for senders. Users can toggle whether they want to receive messages at any time. It's perfect for creators, educators, and teams seeking honest, no-pressure communication.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mailtrap",
      "Socket.io",
    ],
    features: [
      "Email OTP verification using Mailtrap",
      "Anonymous message sending via unique user links",
      "Real-time message delivery with Socket.io",
      "AI message suggestions using Hugging Face LLM",
      "Toggle option to enable/disable receiving messages",
      "Fully responsive, minimal and user-friendly UI",
      "No login required for message senders",
      "User dashboard to manage message settings",
      "Built-in spam and message control system",
    ],
    color: "#F97316",
    gradient: "from-orange-400 to-orange-600",
    demoUrl: "https://whispr-note.vercel.app",
    githubUrl: "https://github.com/AnkitMishra2006/Whispr-Note",
    status: "Completed",
  },
  {
    id: 7,
    name: "Music Academy Website",
    description:
      "A clean, responsive frontend-only website for a fictional Music Academy, built to practice Next.js and Shadcn UI component system.",
    longDescription:
      "Music Academy is a fully responsive static website created as a practice project to explore and implement Next.js and Shadcn UI in a structured layout. The design focuses on clarity, accessibility, and elegant transitions. The site includes sections like Home, About, Instructors, Courses, Testimonials, and Contact — all built using reusable Shadcn components styled with Tailwind CSS. This project was instrumental in refining layout design, component reuse, and navigation structure in a modern React/Next.js setup.",
    tech: [
      "Next.js",
      "Shadcn UI",
      "Tailwind CSS",
      "React Icons",
      "Lucide Icons",
    ],
    features: [
      "Reusable Shadcn components for fast prototyping",
      "Responsive design optimized for mobile and desktop",
      "Scroll animations and smooth transitions",
      "Static routing with clean URL structure",
      "Minimalistic and clear UI design",
      "Structured layout with sections for team, courses, and testimonials",
    ],
    color: "#8B5CF6",
    gradient: "from-violet-500 to-indigo-600",
    demoUrl: "https://music-academy-lyart.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Music-Academy",
    status: "Completed",
  },
  {
    id: 8,
    name: "React Movie App",
    description:
      "A responsive movie search platform with TMDB integration, debounced search, and a trending section powered by Appwrite — built to explore modern React workflows.",
    longDescription:
      "React Movie App is a movie discovery platform built using the TMDB API, allowing users to search thousands of films. To avoid excessive API calls, it implements a debounced search input using `react-use`. Every user search is logged in a database using Appwrite — if a search term already exists, its count is incremented. A dynamic trending section then showcases the most-searched movies based on this data. The app is styled with Tailwind CSS and includes features like rating display, language info, and release year for each movie.",
    tech: ["React", "Vite", "Tailwind CSS", "Appwrite"],
    features: [
      "Search movies using TMDB API",
      "Debounced search input for API efficiency",
      "Trending section based on most searched movies",
      "Appwrite integration for storing search counts",
      "Responsive movie cards with poster, rating, language, and release year",
      "Loading spinner for smoother UX",
      "Modern UI with gradient text and scrollable trending section",
      "Environment-based API key and Appwrite configuration",
    ],
    color: "#6366F1",
    gradient: "from-indigo-400 to-indigo-600",
    demoUrl: "https://react-movie-app-kappa-five.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/React-Movie-App",
    status: "Completed",
  },
  {
    id: 9,
    name: "Mojito Cocktails ",
    description:
      "A fully animated, scroll-responsive UI for a fictional cocktail bar built using GSAP, React, and Tailwind CSS to practice creative frontend animations.",
    longDescription:
      "Mojito Cocktails is a frontend-only project designed to explore advanced GSAP animation capabilities in a realistic, themed setting. It features scroll-triggered animations, a full-screen hero with animated text, a scroll-pinned background video, and a cocktail slider with masked image effects. The layout adapts responsively across screen sizes, using react-responsive for breakpoint handling. With dynamic transitions, parallax movement, and timeline-based sequences, this project acts as a playground for exploring visual storytelling in web development.",
    tech: ["React", "GSAP ", "Tailwind CSS", "Vite"],
    features: [
      "Scroll-triggered text and image animations using GSAP",
      "SplitText typography animations for headers",
      "Scroll-pinned background video synced to scroll progress",
      "Cocktail slider with tab navigation and dynamic transitions",
      "Fully responsive layout with media queries via react-responsive",
      "Custom masked image effects using CSS and GSAP",
      "Layered noise textures and modern gradients",
      "Multi-section layout including Hero, About, Art, Menu, and Contact",
    ],
    color: "#84CC16",
    gradient: "from-lime-400 to-lime-600",
    demoUrl: "https://mojito-cocktails-zeta.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/mojito-cocktails",
    status: "Completed",
  },
  {
    id: 10,
    name: "Shaurya Shandilya Portfolio",
    description:
      "A professional and visually rich portfolio for a law student, crafted using Next.js, Tailwind CSS, and Shadcn UI, highlighting legal internships, education, and contact integration.",
    longDescription:
      "Shaurya Shandilya's portfolio is a fully responsive personal website designed for a BA LLB student to showcase their academic background, legal experience, and professional profile. Built with Next.js, Tailwind CSS, and Shadcn UI, the project integrates animated sections like About, Skills, Projects, and Education. It includes a contact form with email handling via Nodemailer, a themed UI with custom animations, and a clean color palette based on navy, gold, and taupe. The site serves as a polished digital identity for aspiring legal professionals.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Lucide Icons",
    ],
    features: [
      "Hero section with animated profile, introduction, and resume download",
      "Interactive About section with philosophy cards and badge-based skill highlights",
      "Education timeline with icons and subject highlights",
      "Skill cards categorized and styled using color-coded sections",
      "Projects gallery with card layout and tech badges",
      "Contact form with validation and real email handling",
      "Dark/light mode ready theme using CSS variables",
      "Responsive design using utility-first Tailwind CSS",
      "Scroll animations using custom fade-in utilities",
    ],
    color: "#1a2633",
    gradient: "from-taupe to-white-custom",
    demoUrl: "https://shaurya-shandilya.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/shaurya-portfolio", // update if needed
    status: "Completed",
  },
  {
    id: 11,
    name: "Talkative - Real-time Chat App",
    description:
      "A full-stack real-time chat application with authentication, group chats, and instant messaging built using the MERN stack and Socket.io.",
    longDescription:
      "Talkative is a robust full-stack chat platform that allows users to communicate in real time via individual and group chats. Built using MongoDB, Express.js, React, and Node.js (MERN), the application supports user authentication via JWT, chat room management, and message synchronization across clients using Socket.io. The frontend is built with React and Chakra UI for a responsive and accessible design. Real-time updates, typing indicators, notifications, and secure routes are implemented to ensure a modern and seamless chat experience. It also includes search, profile updates, and modular component architecture.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Chakra UI",
      "JWT",
      "Axios",
    ],
    features: [
      "Real-time one-to-one and group messaging using Socket.io",
      "JWT-based authentication and protected routes",
      "User registration, login, and profile management",
      "Typing indicators and real-time message delivery",
      "Chat search and user search with filtering",
      "Group chat creation, renaming, and user management",
      "Responsive UI built with Chakra UI components",
      "Toast notifications for actions and errors",
      "Axios-based API integration for frontend-backend communication",
    ],
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    demoUrl:
      "https://drive.google.com/file/d/19UkbE9Ry6yXRlybVOwHVKHeSrh1TsRWS/view?usp=sharing", // update if deployed
    githubUrl: "https://github.com/AnkitMishra2006/talkative", // update if hosted elsewhere
    status: "Completed",
  },
  {
    id: 12,
    name: "Nike UI Clone",
    description:
      "A modern, responsive UI clone of Nike’s landing page built using React, Tailwind CSS, and Vite to practice pixel-perfect layouts and animations.",
    longDescription:
      "Nike UI Clone is a frontend-only project that recreates the sleek and bold aesthetic of Nike’s product landing pages. Built with React and Tailwind CSS, the project showcases a hero section with call-to-action buttons, product highlights, promotional sections, and animated visuals. The design emphasizes responsiveness, dynamic layout scaling, and hover animations. It is ideal for honing frontend skills like component structuring, animation using Framer Motion, and modern UI styling with utility-first CSS. The layout adapts smoothly across devices, reflecting Nike’s design language.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    features: [
      "Fully responsive landing page layout",
      "Hero section with call-to-action and background graphics",
      "Dynamic grid-based product cards with hover effects",
      "Reusable UI components for flexibility and scalability",
      "Framer Motion animations for element transitions",
      "Scroll-friendly design optimized for user experience",
      "Mobile-friendly layout and optimized assets",
      "Utility-first styling using Tailwind CSS",
      "Clean, maintainable React component structure",
    ],
    color: "#111827",
    gradient: "from-gray-800 to-black",
    demoUrl: "https://nike-clone-ankit.vercel.app/", // update if deployed
    githubUrl: "https://github.com/AnkitMishra2006/nike-ui-clone", // update if needed
    status: "Completed",
  },
];

export const experiences = [
  {
    id: 1,
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
    achievements: [
      "Maintained 8.265 CGPA",
      "Completed 15+ technical projects",
      "Active in coding competitions",
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
    skills: [
      "Leadership",
      "Community Building",
      "Technical Mentoring",
      "Event Organization",
    ],
    achievements: [
      "Organized 5+ technical workshops",
      "Mentored 20+ junior students",
      "Led 3 successful hackathon teams",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Compassion Academy",
    period: "June '25 — Jul '25",
    description:
      "Analyzed educational data and student performance metrics to optimize learning outcomes. Developed data-driven insights for curriculum improvement and created interactive dashboards for tracking student progress and engagement.",
    type: "work",
    skills: [
      "Data Analysis",
      "Python",
      "Excel",
      "Dashboard Creation",
      "Statistical Analysis",
    ],
    achievements: [
      "Improved student performance tracking by 40%",
      "Created automated reporting systems",
      "Developed predictive models for student success",
    ],
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
