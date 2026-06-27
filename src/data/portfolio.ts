export const personalInfo = {
  // Proper-case legal name — used in the page title, footer and schema.
  name: "Ankit Kumar Mishra",
  // The shorter, most-searched form of the name. Drives the <title> and
  // schema `alternateName` so the site ranks for both "Ankit Mishra" and
  // "Ankit Kumar Mishra".
  shortName: "Ankit Mishra",
  title: "Full Stack Software Engineer",
  role: "Full Stack Web Developer & Software Engineer",
  // The single source of truth for the production domain. Everything that
  // builds an absolute URL (canonical, OG tags, JSON-LD) reads from here.
  // No trailing slash — absolute URLs are built as `${baseUrl}/path`.
  baseUrl: "https://ankitmishra.tech",
  // Used verbatim as the <title> tag. ~58 chars, leads with the name and the
  // "web developer" intent the site wants to rank for.
  siteTitle: "Ankit Mishra | Full Stack Web Developer & Software Engineer",
  // ~155 char description optimised for the SERP snippet (Google truncates
  // around 160). Kept separate from the long on-page bio below.
  metaDescription:
    "Ankit Mishra — full-stack web developer and software engineer in New Delhi. I build production web apps, REST APIs and microservices with React, Node.js and Python.",
  // Path (relative to /public) of the 1200×630 social-share image.
  ogImage: "/og-image.png",
  // ISO date of the last meaningful content update — drives the ProfilePage
  // `dateModified` freshness signal and the sitemap `lastmod`. Update when you
  // ship notable content changes.
  siteUpdated: "2026-06-27",
  shortDescription:
    "Building production web apps, REST APIs, and microservices that ship",
  description:
    "Full Stack Software Engineer with 2+ years of production experience shipping web applications, RESTful APIs, and microservices across healthcare (RCM/HIPAA), ed-tech, and enterprise domains. Proficient in JavaScript, TypeScript, Python, React.js, Next.js, Node.js, Express.js, Flask, and MongoDB — delivering backend systems, database architectures, and full-cycle product features in Agile/Scrum environments using Docker, CI/CD, and cloud deployment.",
  email: "ankit.kumar.mishra2006@gmail.com",
  phone: "+91-9354541614",
  location: "New Delhi, India",
  university: "Maharaja Surajmal Institute of Technology",
  currentCompany: "Medvertex",
  // Topics the person is an authority on — surfaced in Person JSON-LD as
  // `knowsAbout` to reinforce topical relevance for search engines.
  expertise: [
    "Full Stack Web Development",
    "Software Engineering",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "REST API Development",
    "Microservices",
    "MongoDB",
    "System Design",
    "Machine Learning",
  ],
  // Languages spoken — surfaced in Person schema as `knowsLanguage`.
  languages: ["English", "Hindi"],
  linkedin: "https://linkedin.com/in/ankitkumarmishra06",
  github: "https://github.com/AnkitMishra2006",
  leetcode: "https://leetcode.com/u/Ankit-Mishra2006",
  resume:
    "https://drive.google.com/file/d/1QQ7aF9Dc9VIWMSbqS0F4P4Oz46irperV/view?usp=sharing",
};

// Visible FAQ content. This doubles as crawlable, entity-rich copy and as the
// source for FAQPage structured data (Google requires the answers to be
// visible on the page to qualify for FAQ rich results).
export const faqs = [
  {
    question: "Who is Ankit Mishra?",
    answer:
      "Ankit Mishra (Ankit Kumar Mishra) is a full-stack web developer and software engineer based in New Delhi, India. He has 2+ years of production experience building web applications, REST APIs, and microservices across healthcare, ed-tech, and enterprise domains using React, Next.js, Node.js, and Python.",
  },
  {
    question: "What does Ankit Mishra do as a web developer?",
    answer:
      "Ankit designs and ships full-stack products end to end — from accessible, responsive front-ends in React, Next.js, and TypeScript to scalable back-ends and APIs in Node.js, Express, and Flask, backed by MongoDB and SQL databases. He also works with Docker, CI/CD pipelines, and cloud deployment, and has delivered HIPAA-compliant healthcare systems.",
  },
  {
    question: "Which technologies and skills does Ankit Mishra specialize in?",
    answer:
      "His core stack includes JavaScript, TypeScript, Python, React.js, Next.js, Node.js, Express.js, Flask, MongoDB, and SQL. He also works with REST APIs, microservices, system design, Docker, GitHub Actions, and has a strong foundation in data structures, algorithms, and machine learning.",
  },
  {
    question: "Is Ankit Mishra available for hire or freelance projects?",
    answer:
      "Yes. Ankit is open to full-time roles, internships, freelance work, and collaborations on web development and software engineering projects. You can reach him through the contact form on this site or by email at ankit.kumar.mishra2006@gmail.com.",
  },
  {
    question: "Where is Ankit Mishra located?",
    answer:
      "Ankit is based in New Delhi, India, and is available for remote work with teams and clients worldwide. He currently builds RCM healthcare software remotely for a US-based company.",
  },
  {
    question: "How can I contact Ankit Mishra?",
    answer:
      "You can contact Ankit via the contact form on this portfolio, by email at ankit.kumar.mishra2006@gmail.com, or by connecting on LinkedIn and GitHub. Links to all of his profiles are in the contact section below.",
  },
];

export const emailConfig = {
  apiUrl: "https://mail-sender-snowy.vercel.app/api/send-email",
  recipientEmail: "ankit.kumar.mishra2006@gmail.com",
};

export const skills = [
  // Programming Languages
  { name: "JavaScript (ES6+)", color: "#F7DF1E", category: "Programming" },
  { name: "TypeScript", color: "#3178C6", category: "Programming" },
  { name: "Python", color: "#3776AB", category: "Programming" },
  { name: "PHP", color: "#777BB4", category: "Programming" },
  { name: "Java", color: "#ED8B00", category: "Programming" },
  { name: "C", color: "#A8B9CC", category: "Programming" },
  { name: "C++", color: "#00599C", category: "Programming" },
  { name: "SQL", color: "#336791", category: "Programming" },
  { name: "Bash", color: "#89E051", category: "Programming" },

  // Frontend
  { name: "React.js", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#FFFFFF", category: "Frontend" },
  { name: "React Native", color: "#61DAFB", category: "Frontend" },
  { name: "Expo", color: "#000020", category: "Frontend" },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Frontend" },
  { name: "Bootstrap", color: "#7952B3", category: "Frontend" },
  { name: "HTML5", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", color: "#1572B6", category: "Frontend" },
  { name: "GSAP", color: "#88CE02", category: "Frontend" },
  { name: "WebRTC", color: "#333333", category: "Frontend" },
  { name: "Zustand", color: "#764ABC", category: "Frontend" },
  { name: "TanStack Query", color: "#FF4154", category: "Frontend" },

  // Backend
  { name: "Node.js", color: "#339933", category: "Backend" },
  { name: "Express.js", color: "#FFFFFF", category: "Backend" },
  { name: "Flask", color: "#E74C3C", category: "Backend" },
  { name: "REST APIs", color: "#009688", category: "Backend" },
  { name: "Microservices", color: "#FF6F00", category: "Backend" },
  { name: "Socket.io", color: "#88CE02", category: "Backend" },
  { name: "JWT", color: "#D63AFF", category: "Backend" },
  { name: "OAuth 2.0", color: "#3C8DBC", category: "Backend" },

  // Databases
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "MySQL", color: "#4479A1", category: "Database" },
  { name: "Oracle SQL", color: "#F80000", category: "Database" },
  { name: "SQLite", color: "#003B57", category: "Database" },
  { name: "Mongoose", color: "#880000", category: "Database" },
  { name: "SQLAlchemy", color: "#D71F00", category: "Database" },

  // Cloud, DevOps & Tools
  { name: "Git", color: "#F05032", category: "Cloud & DevOps" },
  { name: "GitHub", color: "#FFFFFF", category: "Cloud & DevOps" },
  { name: "Docker", color: "#2496ED", category: "Cloud & DevOps" },
  { name: "Kubernetes", color: "#326CE5", category: "Cloud & DevOps" },
  { name: "Vercel", color: "#FFFFFF", category: "Cloud & DevOps" },
  { name: "GitHub Actions", color: "#2088FF", category: "Cloud & DevOps" },
  { name: "CI/CD Pipelines", color: "#22C55E", category: "Cloud & DevOps" },
  { name: "Linux", color: "#FCC624", category: "Cloud & DevOps" },
  { name: "Postman", color: "#FF6C37", category: "Cloud & DevOps" },

  // Services & Integrations
  { name: "Supabase", color: "#3ECF8E", category: "Services & Integrations" },
  { name: "Clerk", color: "#6C47FF", category: "Services & Integrations" },
  { name: "Cloudinary", color: "#3448C5", category: "Services & Integrations" },
  { name: "VAPI", color: "#13C2C2", category: "Services & Integrations" },
  { name: "Mapbox API", color: "#4264FB", category: "Services & Integrations" },
  { name: "Google Sheets API", color: "#0F9D58", category: "Services & Integrations" },
  { name: "SMTP", color: "#EA4335", category: "Services & Integrations" },

  // AI/ML & Data
  { name: "NumPy", color: "#013243", category: "AI/ML & Data" },
  { name: "Pandas", color: "#150458", category: "AI/ML & Data" },
  { name: "Matplotlib", color: "#11557C", category: "AI/ML & Data" },
  { name: "Seaborn", color: "#4C72B0", category: "AI/ML & Data" },
  { name: "Scikit-Learn", color: "#F7931E", category: "AI/ML & Data" },
  { name: "Statistical Modeling", color: "#8E44AD", category: "AI/ML & Data" },

  // Core Competencies
  { name: "OOP", color: "#FFB400", category: "Core Competencies" },
  { name: "Data Structures & Algorithms", color: "#FF5733", category: "Core Competencies" },
  { name: "System Design", color: "#2E86C1", category: "Core Competencies" },
  { name: "Agile/Scrum", color: "#16A085", category: "Core Competencies" },
  { name: "HIPAA Compliance", color: "#1ABC9C", category: "Core Competencies" },
  { name: "RBAC", color: "#9B59B6", category: "Core Competencies" },
  { name: "OWASP Security", color: "#000000", category: "Core Competencies" },
  { name: "Performance Optimization", color: "#E67E22", category: "Core Competencies" },
  { name: "Computer Networks", color: "#16A085", category: "Core Competencies" },
  { name: "SDLC", color: "#5B2C6F", category: "Core Competencies" },
];

export const projects = [
  {
    id: 1,
    name: "WanderLust",
    description:
      "A comprehensive full-stack travel accommodation web application inspired by Airbnb that enables users to explore, create, review, and manage property listings from around the world with interactive maps, secure authentication, and advanced search capabilities.",
    longDescription:
      "WanderLust is an enterprise-grade travel accommodation platform that combines modern web technologies with robust security features and intuitive design. The application provides secure user authentication using Passport.js with MongoDB session storage, comprehensive rate limiting, and CSRF protection. Property owners can create and manage listings with cloud-based image uploads via Cloudinary, while travelers can browse through an advanced search system with full-text indexing, interactive maps powered by MapTiler API, and a comprehensive review system with star ratings. Built with MVC architecture using Express.js and MongoDB, it features pagination for optimal performance, input validation with Joi schemas, and enterprise-level security including Helmet.js integration, MongoDB injection protection, and Content Security Policy implementation.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS Templating",
      "Bootstrap 5",
      "Passport.js",
      "Cloudinary",
      "MapTiler API",
      "Joi Validation",
      "Helmet.js",
      "Express Rate Limit",
      "Express Mongo Sanitize",
      "Connect Flash",
      "Method Override",
      "Multer",
      "Connect Mongo",
      "Font Awesome",
    ],
    features: [
      "Secure user authentication with Passport.js and session management",
      "Property listing CRUD operations with image upload via Cloudinary",
      "Interactive map integration with automatic geocoding and coordinate storage",
      "Advanced search functionality with full-text indexing and pagination",
      "Comprehensive review and rating system (1-5 stars) with ownership protection",
      "Enterprise-level security with Helmet.js, rate limiting, and input sanitization",
      "Responsive design with Bootstrap 5 optimized for all devices",
      "Real-time flash messaging system and comprehensive error handling",
      "Protected routes with authorization and ownership validation",
      "Database indexing for optimized search performance and geographic queries",
      "Tax information toggle for transparent pricing display",
      "Cascade review deletion when listings are removed",
    ],
    color: "#4CAF50",
    gradient: "from-green-400 to-green-600",
    demoUrl: "https://wander-lust-mocha.vercel.app/listings",
    githubUrl: "https://github.com/AnkitMishra2006/WanderLust",
    image: "/images/wanderlust.png",
    status: "Completed",
  },
  {
    id: 2,
    name: "StreamiFy",
    description:
      "A modern language learning social platform that connects language learners worldwide through real-time chat and video calls, built with the MERN stack and powered by Stream.io to create meaningful connections between native speakers and language learners.",
    longDescription:
      "StreamiFy is a comprehensive language exchange platform that revolutionizes how people learn languages through social interaction. Built with React 19, Node.js, and MongoDB, it features intelligent language matching algorithms that connect native speakers with learners based on complementary language skills. The platform integrates Stream.io's chat and video infrastructure to provide seamless real-time communication, while offering a rich user experience with 20+ customizable themes, smart friend recommendations, and comprehensive profile management. With JWT-based authentication, HTTP-only cookies for security, and responsive design optimized for both desktop and mobile, StreamiFy creates an engaging environment for language practice and cultural exchange.",
    tech: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream.io",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "TanStack Query",
      "Zustand",
      "JWT",
      "Mongoose",
    ],
    features: [
      "Smart language partner matching based on native/learning language compatibility",
      "Real-time chat messaging powered by Stream Chat with rich features",
      "HD video calling integration using Stream Video SDK",
      "Comprehensive friend request system with accept/decline functionality",
      "JWT-based secure authentication with HTTP-only cookies",
      "Complete user onboarding with language preferences and profile setup",
      "20+ beautiful themes including light, dark, cupcake, and forest modes",
      "Auto-generated profile pictures for quick setup",
      "Real-time notifications for friend requests and messages",
      "Responsive design optimized for desktop and mobile devices",
      "Language flags and visual indicators for better UX",
      "Direct video call initiation from chat conversations",
    ],
    color: "#10B981",
    gradient: "from-emerald-500 to-green-600",
    demoUrl: "https://streamify-6ke5.onrender.com/",
    githubUrl: "https://github.com/AnkitMishra2006/StreamiFy",
    image: "/images/streamify.png",
    status: "Completed",
  },
  {
    id: 3,
    name: "Converso",
    description:
      "A voice-powered AI teaching platform that creates personalized learning experiences through conversational companions with real-time voice interaction and comprehensive session management.",
    longDescription:
      "Converso is a cutting-edge AI-powered educational platform that enables users to create custom AI teaching companions tailored to specific subjects and learning styles. Built with Next.js, TypeScript, and modern web technologies, it offers real-time voice interaction via VAPI, secure authentication through Clerk, and comprehensive learning analytics. Users can create companions for various subjects including Mathematics, Science, Language, History, Coding, and Economics, with customizable voice types, teaching styles, and session durations. The platform features session bookmarking, progress tracking, search and filtering capabilities, and a responsive design optimized for all devices. Perfect for students, educators, and learners seeking personalized AI-powered educational experiences.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "VAPI",
      "Sentry",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Lottie React",
    ],
    features: [
      "Voice-enabled AI teaching companions with real-time interaction",
      "Custom companion creation with subject, topic, voice, and style selection",
      "Live transcription and conversation history",
      "Bookmark and session management system",
      "User authentication and role-based access control with Clerk",
      "Search and subject filtering capabilities",
      "Personal dashboard with learning analytics and progress tracking",
      "Responsive design optimized for desktop, tablet, and mobile",
      "Real-time error monitoring and performance tracking with Sentry",
      "Supabase database with Row Level Security policies",
      "Voice interaction powered by VAPI with speech-to-text and text-to-speech",
      "Session history and bookmarked companions management",
    ],
    color: "#fe5933",
    gradient: "from-orange-400 to-red-500",
    demoUrl: "https://converso-six.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Converso",
    image: "/images/converso.png",
    status: "Completed",
  },
  {
    id: 4,
    name: "Sonic Ring Run",
    description:
      "A fast-paced endless runner game featuring Sonic the Hedgehog, built with JavaScript and the Kaplay game engine. Features dynamic gameplay mechanics, progressive difficulty scaling, and immersive sound effects for an engaging browser-based gaming experience.",
    longDescription:
      "Sonic Ring Run is a modern endless runner game that brings the classic Sonic experience to the web browser. Built entirely with JavaScript and the Kaplay game engine, it features sophisticated sprite animations, precise collision detection, and a dynamic scoring system with multipliers. The game includes responsive controls supporting keyboard, mouse, and touch inputs, making it accessible across all devices. With carefully crafted game physics including gravity simulation and jump mechanics, progressive difficulty scaling, and a comprehensive ranking system from F to S grades, it delivers a console-quality gaming experience with smooth 60fps gameplay and immersive audio design.",
    tech: [
      "Kaplay",
      "JavaScript",
      "Vite",
      "2D Game Development",
      "Web Audio API",
    ],
    features: [
      "Endless side-scrolling gameplay with increasing difficulty",
      "Precise collision detection and sprite-based animations",
      "Dynamic scoring system with multiplier chains",
      "Responsive controls for keyboard, mouse, and touch",
      "Progressive difficulty scaling and speed increases",
      "Persistent high-score tracking with ranking system",
      "Immersive sound effects and background music",
      "Cross-platform browser compatibility",
    ],
    color: "#0066FF",
    gradient: "from-blue-500 to-blue-700",
    demoUrl: "https://sonic-runner06.netlify.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Sonic-Runner",
    image: "/images/sonic-ring-run.png",
    status: "Completed",
  },
  {
    id: 5,
    name: "Resumind",
    description:
      "An AI-powered resume analyzer that evaluates PDF resumes based on ATS compatibility and key hiring criteria, providing instant feedback and improvement tips to job seekers.",
    longDescription:
      "Resumind is a cutting-edge web application that revolutionizes the way job seekers optimize their resumes. Powered by advanced AI technology, it provides comprehensive analysis across multiple dimensions including ATS compatibility, content quality, structure optimization, and skills assessment. The application features drag & drop PDF upload, real-time AI analysis, beautiful score visualizations with animated gauges, and actionable improvement suggestions. Built with React 19, TypeScript, and Tailwind CSS, it offers a modern, responsive interface with secure authentication and file handling through Puter.js. Users can track their progress with detailed scoring across categories like Tone & Style, Content, Structure, and Skills, making it an essential tool for crafting job-winning resumes.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Puter.js",
      "React Router",
      "PDF.js",
      "Zustand",
    ],
    features: [
      "AI-powered resume analysis with instant feedback",
      "ATS score visualization with animated gauges",
      "Multi-category scoring (Tone, Content, Structure, Skills)",
      "Drag & drop PDF upload with preview",
      "Secure authentication and cloud storage via Puter.js",
      "Responsive design with modern UI/UX",
      "Personal dashboard to track multiple resumes",
      "PDF to image conversion for easy viewing",
      "Real-time analysis status updates",
      "Actionable improvement suggestions",
      "Enterprise-grade security and privacy",
      "Fast performance with Vite optimization",
    ],
    color: "#6366F1",
    gradient: "from-indigo-400 to-indigo-600",
    demoUrl: "https://resumind-resume-analyzer.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/ai-resume-analyzer",
    image: "/images/resumind.png",
    status: "Completed",
  },
  {
    id: 6,
    name: "Talkative",
    description:
      "A modern, full-stack real-time chat application built with React, Node.js, Socket.IO, and MongoDB that enables users to communicate instantly with secure authentication, file sharing, and online status tracking.",
    longDescription:
      "Talkative is a comprehensive real-time messaging platform that combines cutting-edge web technologies with an intuitive user experience. The application features secure JWT-based authentication with bcrypt password hashing, real-time bidirectional communication through Socket.IO, and persistent message storage in MongoDB. Users can share images via Cloudinary integration, track online status in real-time, manage their profiles, and enjoy a responsive design built with Tailwind CSS and DaisyUI. The application follows modern development practices with a clean separation between frontend and backend, state management through Zustand, and supports multiple themes for personalization.",
    tech: [
      "React 18",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "Cloudinary",
      "Axios",
      "React Router",
    ],
    features: [
      "Real-time messaging with instant delivery using Socket.IO",
      "Secure JWT-based authentication with password hashing",
      "Image sharing and file upload with Cloudinary integration",
      "Live online status tracking for all users",
      "Profile management with avatar updates",
      "Responsive design optimized for desktop and mobile",
      "Multiple theme support for UI personalization",
      "Persistent message history stored in MongoDB",
      "Modern UI built with Tailwind CSS and DaisyUI components",
      "Real-time toast notifications for user feedback",
    ],
    color: "#00D9FF",
    gradient: "from-cyan-400 to-blue-500",
    demoUrl: "https://talkative-udcm.onrender.com/",
    githubUrl: "https://github.com/AnkitMishra2006/talkative",
    image: "/images/talkative.png",
    status: "Completed",
  },
  {
    id: 7,
    name: "AI News Summarizer Extension",
    description:
      "A powerful Chrome extension that intelligently extracts and summarizes article content from any webpage using Google's Gemini AI, providing instant customizable summaries without leaving your browser.",
    longDescription:
      "This Chrome extension revolutionizes how users consume online content by providing instant, AI-powered article summarization using Google Gemini 1.5 Flash. The extension features smart text extraction that automatically detects article content, offers three distinct summary types (brief, detailed, and bullet points), and includes a clean popup interface with one-click copy functionality. Built with Chrome Extension Manifest V3, it securely stores API keys using Chrome's sync storage and works across all websites with proper article structure.",
    tech: [
      "JavaScript",
      "Chrome Extension APIs",
      "Google Gemini AI",
      "Manifest V3",
    ],
    features: [
      "Smart text extraction from any webpage",
      "Three AI-powered summary modes (brief, detailed, bullet points)",
      "Google Gemini 1.5 Flash integration",
      "One-click copy to clipboard functionality",
      "Secure API key storage with Chrome sync",
      "Clean, responsive popup interface",
      "Universal website compatibility",
      "Real-time AI processing with loading indicators",
    ],
    color: "#4285F4",
    gradient: "from-blue-500 to-indigo-600",
    demoUrl:
      "https://drive.google.com/file/d/1y1uShnFD_tyRpvQx387UNsI2Z4ZkH-Uc/view?usp=sharing",
    githubUrl: "https://github.com/AnkitMishra2006/Article-Summarizer",
    status: "Completed",
  },
  {
    id: 8,
    name: "WhisprNote - Anonymous Feedback Web App",
    description:
      "A modern full-stack anonymous messaging platform with email verification, AI-powered suggestions, and customizable privacy settings — built with Next.js 15 for secure, private communication.",
    longDescription:
      "WhisprNote is a comprehensive web application that enables users to receive honest, anonymous feedback through unique shareable links. Built with Next.js 15 and the App Router, it features a robust authentication system with email verification using Resend API and secure OTP verification. Users get a personalized URL (/u/username) where anyone can send anonymous messages without creating an account. The platform integrates HuggingFace's Mistral-7B model to provide AI-generated conversation starters, helping senders craft meaningful messages. Users have complete control over their privacy with toggleable message acceptance settings. The application features a clean, responsive design built with Tailwind CSS v4 and ShadCN UI components, making it perfect for content creators, professionals, students, and anyone seeking genuine feedback from their network.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "MongoDB",
      "NextAuth v4",
      "Resend API",
      "HuggingFace AI",
      "ShadCN UI",
      "Zod Validation",
    ],
    features: [
      "Email verification with secure OTP system using Resend API",
      "Anonymous message sending via unique shareable user links",
      "AI-powered conversation starters using HuggingFace Mistral-7B",
      "Toggle privacy controls to enable/disable message acceptance",
      "Secure authentication with NextAuth v4 and JWT sessions",
      "Real-time dashboard for message management and deletion",
      "Responsive design optimized for all devices",
      "Beautiful email templates with React Email components",
      "Username uniqueness validation and secure password hashing",
      "Modern UI with ShadCN components and Lucide React icons",
      "Form validation with React Hook Form and Zod schemas",
      "Interactive message carousel showcasing platform features",
    ],
    color: "#3B82F6",
    gradient: "from-blue-500 to-purple-600",
    demoUrl: "https://whispr-note.vercel.app",
    githubUrl: "https://github.com/AnkitMishra2006/Whispr-Note",
    status: "Completed",
  },
  {
    id: 9,
    name: "React Movie App",
    description:
      "A modern, responsive movie discovery application built with React, Vite, and TailwindCSS. Search through thousands of movies, discover trending films, and get detailed information about your favorite movies using The Movie Database (TMDb) API.",
    longDescription:
      "React Movie App is a comprehensive movie discovery platform that leverages The Movie Database (TMDb) API to provide users with access to thousands of movies. The application implements advanced search functionality with debounced input using react-use to optimize API calls and reduce server load. User search patterns are intelligently tracked using Appwrite database - when users search for movies, the system either increments existing search counts or creates new entries. This data powers a dynamic trending section that showcases the top 5 most searched movies based on real user interactions. The app features a modern, responsive design built with TailwindCSS 4.0, includes comprehensive movie details like ratings, release years, and original languages, and provides fallback images for missing posters. Built with React 19.0 and Vite 6.2 for lightning-fast performance and development experience.",
    tech: ["React", "Vite", "TailwindCSS", "Appwrite", "TMDb API", "React-Use"],
    features: [
      "Real-time movie search with debounced input for optimal performance",
      "Trending movies dashboard showing top 5 most searched films",
      "Comprehensive movie details including ratings, release year, and language",
      "Fully responsive design optimized for desktop, tablet, and mobile",
      "Lightning-fast performance with Vite hot module replacement",
      "Search analytics and pattern tracking using Appwrite database",
      "Smart loading states with user-friendly spinners",
      "Fallback images for graceful handling of missing movie posters",
      "Modern UI/UX with gradient effects and smooth animations",
      "Environment-based configuration for API keys and database credentials",
      "Error handling with user-friendly messages",
      "Efficient API calls with 500ms debounce to reduce server load",
    ],
    color: "#06B6D4",
    gradient: "from-cyan-400 to-cyan-600",
    demoUrl:
      "https://react-movie-6m1vqkdwj-ankitmishra2006s-projects.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/React-Movie-App",
    status: "Completed",
  },
  {
    id: 10,
    name: "Music Academy Website",
    description:
      "A modern, responsive web application for a fictional Music Academy built with Next.js 15, TypeScript, and Tailwind CSS, featuring advanced UI components and smooth animations.",
    longDescription:
      "Music Academy is a fully responsive web application created to showcase modern web development techniques using Next.js 15 and advanced UI components. The project features a comprehensive music academy website with interactive 3D cards, animated backgrounds, testimonial carousels, and instructor showcases. Built with TypeScript for type safety and Tailwind CSS for styling, it includes custom UI components like background beams, wavy backgrounds, infinite moving cards, and sticky scroll reveals. The site demonstrates advanced animation techniques using Framer Motion and includes course management, webinar listings, contact forms, and a complete responsive design system optimized for all devices.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Interactive 3D card effects with depth and hover animations",
      "Advanced background animations (beams, waves, gradients, spotlight)",
      "Responsive design optimized for desktop, tablet, and mobile",
      "Dynamic course management with JSON-based data",
      "Infinite scrolling testimonial carousel",
      "Animated instructor showcase with tooltips",
      "Sticky scroll reveal for progressive content unveiling",
      "Contact form with background beam effects",
      "Server-side rendering with Next.js App Router",
      "TypeScript integration for complete type safety",
      "Custom utility functions for className management",
      "Performance optimized with image optimization and lazy loading",
    ],
    color: "#06B6D4",
    gradient: "from-cyan-500 to-teal-600",
    demoUrl: "https://music-academy-lyart.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Music-Academy",
    status: "Completed",
  },
  {
    id: 11,
    name: "Mojito Cocktails - Velvet Pour",
    description:
      "A fully animated, scroll-responsive UI for a fictional cocktail bar built using GSAP, React, and Tailwind CSS to practice creative frontend animations.",
    longDescription:
      "Mojito Cocktails is a frontend-only project designed to explore advanced GSAP animation capabilities in a realistic, themed setting. It features scroll-triggered animations, a full-screen hero with animated text, a scroll-pinned background video, and a cocktail slider with masked image effects. The layout adapts responsively across screen sizes, using react-responsive for breakpoint handling. With dynamic transitions, parallax movement, and timeline-based sequences, this project acts as a playground for exploring visual storytelling in web development.",
    tech: ["React", "GSAP", "Tailwind CSS"],
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
    color: "#e7d393",
    gradient: "from-yellow-400 to-yellow-600",
    demoUrl: "https://mojito-cocktails-zeta.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/mojito-cocktails",
    status: "Completed",
  },
  {
    id: 12,
    name: "Shaurya Shandilya Portfolio",
    description:
      "A professional and visually rich portfolio for a law student, crafted using Next.js, Tailwind CSS, and Shadcn UI, highlighting legal internships, education, and contact integration.",
    longDescription:
      "Shaurya Shandilya's portfolio is a fully responsive personal website designed for a BA LLB student to showcase their academic background, legal experience, and professional profile. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS with Radix UI components, the project features animated sections including Hero, About, Skills, Projects, Education, and Contact. It includes a functional contact form with email handling, theme switching capabilities, and smooth scroll navigation. The site uses a sophisticated color palette of navy, gold, and taupe with custom animations and hover effects. The portfolio showcases legal internships at Kumar Chandiwal Associates, The Amikus Qriae, and Legal Vidhiya, along with community service experience. It serves as a polished digital identity for aspiring legal professionals with resume download functionality and professional branding.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Lucide React",
    ],
    features: [
      "Hero section with animated profile photo, introduction, and Google Drive resume download",
      "Interactive About section with philosophy cards and legal expertise badges",
      "Education timeline showcasing BA LLB program with subject highlights and institution details",
      "Skills section with categorized legal and technical competencies using color-coded cards",
      "Projects gallery featuring legal internships and volunteer work with detailed descriptions",
      "Contact form with React Hook Form validation and Zod schema validation",
      "Dark/light mode theme switching using next-themes",
      "Fully responsive design with mobile-first approach using Tailwind CSS",
      "Smooth scroll navigation and fade-in animations with custom CSS utilities",
      "Toast notifications for user feedback using Sonner",
      "Professional color scheme with navy, gold, and taupe palette",
      "Accessible components built with Radix UI primitives",
    ],
    color: "#1A2633",
    gradient: "from-taupe to-white-custom",
    demoUrl: "https://shaurya-portfolio-phi.vercel.app/",
    githubUrl: "https://github.com/AnkitMishra2006/Shaurya-Portfolio",
    status: "Completed",
  },
  {
    id: 13,
    name: "Nike UI Clone",
    description:
      "A modern, responsive UI clone of Nike's landing page built using React, Tailwind CSS, and Vite to practice pixel-perfect layouts and interactive components.",
    longDescription:
      "Nike UI Clone is a frontend-only project that recreates the sleek and bold aesthetic of Nike's product landing pages. Built with React 19 and Tailwind CSS, the project showcases a hero section with interactive shoe selector and dynamic image switching, product highlights with responsive grid layouts, promotional sections, customer reviews, and newsletter subscription. The design emphasizes responsiveness, component reusability, and modern UI styling with utility-first CSS. Features include dynamic state management for shoe selection, responsive design across all devices, custom utility classes, and clean component architecture. The layout adapts smoothly across devices while maintaining Nike's design language and brand aesthetics.",
    tech: ["React", "Tailwind CSS", "Vite"],
    features: [
      "Fully responsive landing page layout with mobile-first approach",
      "Interactive hero section with dynamic shoe image switching",
      "Product grid with responsive cards and consistent styling",
      "Reusable UI components (Button, Cards, Navigation) for scalability",
      "Custom Tailwind CSS utility classes and design system",
      "React hooks for state management and interactive features",
      "Mobile-friendly hamburger navigation menu",
      "Statistics display with engaging number presentations",
      "Customer review testimonials with rating system",
      "Newsletter subscription form with modern input design",
      "Services section with icon-based feature cards",
      "Footer with social media links and organized navigation",
      "Clean, maintainable React component architecture",
      "Custom color palette matching Nike's brand identity",
      "Typography system with Google Fonts integration",
    ],
    color: "#FF6452", // Nike's coral-red color from the project
    gradient: "from-red-500 to-red-600",
    demoUrl: "https://nike-clone-ankit.vercel.app/", // update if deployed
    githubUrl: "https://github.com/AnkitMishra2006/Nike-UI", // update if needed
    status: "Completed",
  },
  {
    id: 14,
    name: "Smart Notes",
    description:
      "An intelligent AI-powered note-taking application that combines seamless note management with advanced AI chat functionality, enabling users to ask questions about their notes and get intelligent responses using vector embeddings and RAG (Retrieval Augmented Generation) technology.",
    longDescription:
      "Smart Notes is a cutting-edge note-taking platform that revolutionizes how users interact with their personal knowledge base. Built with Next.js 15 and powered by Convex for real-time backend operations, the application features sophisticated AI integration using free APIs including Groq for language model processing and Hugging Face for vector embeddings. Users can create, manage, and search through their notes while leveraging an intelligent AI chatbot that understands context and provides relevant responses based on note content. The platform includes secure authentication, real-time synchronization, markdown support, and a modern responsive interface with dark mode functionality.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel AI SDK",
      "Groq API",
      "Hugging Face API",
      "Convex Auth",
      "React Hook Form",
      "Zod Validation",
      "Lucide React",
      "next-themes",
    ],
    features: [
      "AI-powered chat interface with natural language processing",
      "Vector embeddings for semantic search and content retrieval",
      "Real-time note synchronization across all devices",
      "Secure user authentication and session management",
      "Markdown support for rich text formatting",
      "RAG (Retrieval Augmented Generation) for contextual responses",
      "Responsive design with dark/light mode toggle",
      "Free API integration (Groq + Hugging Face)",
      "Real-time streaming AI responses",
      "Comprehensive note management (CRUD operations)",
      "Modern UI with shadcn/ui components",
      "TypeScript for enhanced developer experience",
    ],
    color: "#6366F1",
    gradient: "from-indigo-400 to-purple-600",
    demoUrl: "https://smart-notes-ai.vercel.app",
    githubUrl: "https://github.com/AnkitMishra2006/AI-Notes-App",
    status: "In Progress",
  },
];

export const experiences = [
  {
    id: 1,
    title: "B.Tech in Computer Science Engineering",
    company: "Maharaja Surajmal Institute of Technology",
    period: "Aug '23 — May '27",
    description:
      "Pursuing a Bachelor's degree with a GPA of 8.30 / 10.0. Coursework spans Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP, Software Engineering, and Machine Learning.",
    type: "education",
    skills: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
      "Machine Learning",
    ],
    achievements: [
      "Maintained an 8.30 / 10.0 GPA",
      "Shipped 15+ technical projects",
      "Active in national hackathons & competitions",
    ],
  },
  {
    id: 2,
    title: "Web Developer Member",
    company: "Microsoft Students Chapter (MSC) — Delhi, India",
    period: "Sep '24 — Sep '25",
    description:
      "Extended the MSC club website with 6+ new feature modules for events and initiatives serving 200+ active members, and released a browser-based competition game within a 48-hour hackathon — owning the full lifecycle from wireframe to deployment.",
    type: "organization",
    skills: [
      "Web Development",
      "JavaScript",
      "Frontend Design",
      "Problem Solving",
    ],
    achievements: [
      "Built 6+ feature modules serving 200+ active members",
      "Shipped a browser game in a 48-hour hackathon",
      "Owned the product lifecycle from wireframe to deploy",
    ],
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "V Devi Foundation (Delhi, India)",
    period: "May '25",
    description:
      "Processed and cleaned 10,000+ records from 5 disparate sources using Python, Pandas and NumPy, then built statistical pipelines and dashboards with Matplotlib and Seaborn to inform resource-allocation decisions across active programs.",
    type: "work",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "Statistical Analysis",
    ],
    achievements: [
      "Cut data inconsistencies by 80% across 10,000+ records",
      "Built visual dashboards informing 3 active programs",
      "Produced a reliable dataset for organizational reporting",
    ],
  },
  {
    id: 4,
    title: "Full Stack Web Developer Intern",
    company: "Gera & Associates (Delhi, India)",
    period: "Jun '25 — Aug '25",
    description:
      "Launched a Flask + SQLAlchemy lead-generation platform with on-page SEO and deployed 2 Node.js microservices (mail automation and Google Sheets sync) on Vercel with rate limiting and validation, automating the pipeline from form submission to CRM in under 2 seconds.",
    type: "work",
    skills: [
      "Flask",
      "SQLAlchemy",
      "Node.js",
      "Google Sheets API",
      "SMTP",
      "SEO",
      "Vercel",
    ],
    achievements: [
      "Drove 15–20 qualified weekly leads for a 500+ project firm",
      "Cut manual CRM data entry by 60% with no-code lead capture",
      "Automated form-to-CRM data flow in under 2 seconds",
    ],
  },
  {
    id: 5,
    title: "Full Stack Web Developer Intern",
    company: "Medvertex (Chandler, Arizona, US — Remote)",
    period: "Nov '25 — Present",
    description:
      "Maintaining a Role-Based Access Control system across an RCM healthcare platform for full HIPAA Technical Safeguard compliance, building a 15-minute inactivity auto-logout with server-side token invalidation, and delivering 4 core RCM modules (Tasks, Patients, Patient Visits, Payments) in Python, Flask, MongoDB and Jinja2.",
    type: "work",
    skills: [
      "Python",
      "Flask",
      "MongoDB",
      "RBAC",
      "HIPAA Compliance",
      "REST APIs",
      "Agile/Scrum",
    ],
    achievements: [
      "Governed module-level permissions for 5+ user roles under HIPAA",
      "Reduced manual administrative workload by 35% across teams",
      "Shipped 2–3 production-ready features per two-week sprint",
    ],
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];
