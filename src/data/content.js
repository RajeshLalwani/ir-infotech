export const COMPANY_INFO = {
  name: "IR InfoTech",
  tagline: "Technology Solutions & Talent Incubator",
  slogan: "Engineering the Next Dimension of Intelligent Technology",
  email: "contact@irinfotech.in",
  careersEmail: "careers@irinfotech.in",
  internshipsEmail: "internships@irinfotech.in",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  address: "Innovation Tech Park, Sector 62, Noida, NCR, India",
  hours: "Mon - Sat: 9:00 AM – 7:00 PM IST (24/7 Client Emergency Support)",
  linkedin: "https://www.linkedin.com/company/ir-infotech-official/home/",
};

export const STATS = [
  { label: "System Uptime SLA", value: "99.98%", description: "Enterprise-grade reliability" },
  { label: "Successful Deployments", value: "150+", description: "Global web & cloud projects" },
  { label: "Students Trained", value: "1,200+", description: "Industry-ready engineers" },
  { label: "Client Satisfaction", value: "4.9/5", description: "Across 40+ corporate partners" },
];

export const THREE_PILLARS = [
  {
    id: "services",
    icon: "ShieldCheck",
    title: "Professional IT Service Provider",
    description: "End-to-end IT infrastructure, zero-trust cybersecurity, multi-cloud migrations, and 24/7 managed SLA support for modern enterprises.",
    badge: "Enterprise IT",
  },
  {
    id: "solutions",
    icon: "Cpu",
    title: "Cutting-Edge Technology Solutions",
    description: "Custom SaaS platforms, bespoke web & mobile applications, AI/ML agentic pipelines, and scalable microservices architectures.",
    badge: "Digital Solutions",
  },
  {
    id: "internships",
    icon: "GraduationCap",
    title: "Paid Internships & Corporate Training",
    description: "Empowering tech students and graduates with hands-on live project training, 1-on-1 mentorship, stipend opportunities, and verified certifications.",
    badge: "Student Career Hub",
  },
];

export const SERVICES = [
  {
    id: "software-dev",
    title: "Custom Software Development",
    icon: "Code2",
    shortDesc: "Scalable enterprise software, distributed microservices, and bespoke business tools tailored to your workflows.",
    fullDesc: "We build tailored software architectures engineered for high concurrency, zero-downtime fault tolerance, and modular evolution. From multi-tenant SaaS to custom internal ERPs, our systems eliminate technical debt from day one.",
    features: [
      "Custom Enterprise ERP & CRM Systems",
      "High-throughput Microservices & APIs",
      "Automated Business Workflow Engines",
      "Database Optimization & Architecture (Postgres, Mongo, Redis)",
      "Legacy System Refactoring & Modernization"
    ],
    techStack: ["Node.js", "Python", "Go", "PostgreSQL", "Docker", "RabbitMQ"]
  },
  {
    id: "web-dev",
    title: "Modern Web Application Development",
    icon: "Globe",
    shortDesc: "Ultra-fast, responsive web applications engineered with Next.js, React, and modern cloud deployment standards.",
    fullDesc: "We engineer lightning-fast digital web experiences with 100/100 Core Web Vitals score. Responsive, interactive, accessible, and conversion-optimized for startups and international scale-ups.",
    features: [
      "Dynamic Web Apps (SPA & SSR)",
      "B2B & B2C E-Commerce Portals",
      "Admin Analytics & Operational Dashboards",
      "Headless CMS & API-Driven Architecture",
      "Speed & Core Web Vitals Optimization"
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"]
  },
  {
    id: "mobile-apps",
    title: "Mobile App Engineering",
    icon: "Smartphone",
    shortDesc: "Cross-platform iOS and Android applications delivering 60fps native performance with unified codebases.",
    fullDesc: "Crafting beautiful, intuitive mobile applications that keep users hooked. From initial UI/UX wireframes to Google Play Store and Apple App Store production deployment.",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Native Hardware Integrations (Camera, GPS, Biometrics)",
      "Offline-first Sync & Caching",
      "Push Notifications & User Re-engagement Systems",
      "In-App Purchases & Secure Payment Gateways"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    icon: "Sparkles",
    shortDesc: "Agentic AI workflows, LLM integrations, automated computer vision, and predictive analytics models.",
    fullDesc: "Harness the power of modern artificial intelligence. We build custom generative AI assistants, document intelligence pipelines, conversational bots, and predictive forecasting algorithms that save thousands of man-hours.",
    features: [
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Custom Autonomous AI Agents & Workflows",
      "Predictive Analytics & Churn Modeling",
      "Computer Vision & Document OCR",
      "Fine-tuned Open-Source Models (Llama, Mistral)"
    ],
    techStack: ["PyTorch", "LangChain", "OpenAI / Gemini API", "FastAPI", "HuggingFace"]
  },
  {
    id: "data-science",
    title: "Data Science & Business Intelligence",
    icon: "BarChart3",
    shortDesc: "Transform raw data into real-time visual dashboards, automated ETL pipelines, and strategic intelligence.",
    fullDesc: "Data without clarity is noise. We engineer robust big-data pipelines, modern data warehouses, and interactive visual reporting dashboards that empower C-level executives to make decisive, profitable moves.",
    features: [
      "Automated Big Data ETL Pipelines",
      "Interactive PowerBI & Custom React Dashboards",
      "Data Lakehouse & Warehouse Architecture",
      "Real-time Stream Processing (Kafka / Spark)",
      "Statistical Exploratory Data Analysis"
    ],
    techStack: ["Python", "Pandas", "Power BI", "Snowflake", "Apache Kafka", "BigQuery"]
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Digital Advisory",
    icon: "LineChart",
    shortDesc: "Strategic technology roadmaps, cloud architecture audits, cybersecurity compliance, and fractional CTO advisory.",
    fullDesc: "Whether you are a startup architecting your first Minimum Viable Product or an enterprise planning cloud modernization, our senior architects guide you through tech stack choices, cost optimizations, and compliance.",
    features: [
      "Technical Due Diligence & Codebase Audits",
      "Cloud Cost & Performance Optimization",
      "Zero-Trust Cybersecurity Architecture",
      "Fractional CTO & Tech Strategy Leadership",
      "DevOps Automation & CI/CD Pipeline Setup"
    ],
    techStack: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "GitHub Actions"]
  },
];

export const PROJECTS = [
  {
    id: "finguard",
    title: "FinGuard CyberSec & Fraud Prevention Suite",
    category: "Software Development",
    client: "Global FinTech Client",
    summary: "High-throughput fraud detection engine analyzing over 12,000 transactions per second with sub-50ms latency.",
    metrics: "99.99% Uptime · 4.2x Faster Detection · Zero False Positives in SLA",
    tags: ["React", "Python", "FastAPI", "Redis", "Zero-Trust Security"],
    features: ["Real-time anomaly scoring", "PCI-DSS certified architecture", "Automated threat quarantine"]
  },
  {
    id: "medipulse",
    title: "MediPulse Health AI & Telemedicine",
    category: "AI & ML",
    client: "CarePlus Healthcare Network",
    summary: "HIPAA-compliant telemedicine platform with an AI-assisted diagnostic triaging assistant and electronic health record integration.",
    metrics: "+45% Patient Throughput · 80,000+ Active Patients",
    tags: ["Next.js", "AI Agent", "WebRTC", "PostgreSQL", "HIPAA"],
    features: ["End-to-end encrypted video calls", "Automated clinical transcriptions", "Prescription dispatch engine"]
  },
  {
    id: "omnilogix",
    title: "OmniLogix Multi-Warehouse ERP",
    category: "Software Development",
    client: "Apex Supply Chain Logistics",
    summary: "Centralized supply chain and automated inventory management dashboard connecting 14 fulfillment centers across India.",
    metrics: "-35% Warehouse Overhead · Real-time GPS Telemetry",
    tags: ["React", "Node.js", "Docker", "Tailwind CSS", "PostgreSQL"],
    features: ["Barcode/QR scanning", "Automated restock triggers", "Driver route optimization"]
  },
  {
    id: "edunova",
    title: "EduNova Adaptive Learning & Code Proctored LMS",
    category: "Web Development",
    client: "Premier Coding Academy",
    summary: "Interactive educational platform featuring browser-based compiler sandboxes, real-time code reviews, and automated certificate issuance.",
    metrics: "120,000+ Submissions · 99.8% System Uptime",
    tags: ["React.js", "Node.js", "Monaco Editor", "Docker Containers", "AWS"],
    features: ["In-browser code execution", "Plagiarism check engine", "Instant certificate verification"]
  },
  {
    id: "vortex-iot",
    title: "Vortex Smart Industrial IoT Monitor",
    category: "Data Science",
    client: "Zenith Precision Manufacturing",
    summary: "Edge-to-cloud industrial telemetry monitoring temperature, vibration, and energy loads with predictive breakdown alerts.",
    metrics: "Saved $180k in Preventative Maintenance · 50+ Connected Sensor Hubs",
    tags: ["Python", "MQTT", "Time-Series DB", "React Dashboards"],
    features: ["Instant threshold alerts", "Automated maintenance tickets", "Historical load forecasting"]
  },
  {
    id: "swiftpay",
    title: "SwiftPay Unified Merchant Payment Portal",
    category: "Mobile Apps",
    client: "Retail Next Commerce",
    summary: "Cross-platform mobile billing application supporting soundbox integration, UPI QR generation, and daily settlement logs.",
    metrics: "50,000+ Daily Transactions · 4.8 App Rating",
    tags: ["Flutter", "Node.js", "UPI Gateway", "Firebase"],
    features: ["Multi-language voice alerts", "Instant settlement ledger", "Offline mode transaction sync"]
  }
];

export const INTERNSHIP_DOMAINS = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    icon: "Layout",
    badge: "Most Popular",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Live Client Project Allocation",
    highlights: ["React.js, Next.js, Node.js & Express", "PostgreSQL, MongoDB & Supabase", "REST & GraphQL API Integration", "Git & CI/CD Deployment"],
    prerequisites: "Basic knowledge of HTML, CSS & JavaScript or any programming language",
    description: "Build production-grade web applications from scratch. You will work on real client modules, write clean industry code, and deploy to live clouds."
  },
  {
    id: "aiml",
    title: "AI & Machine Learning Engineering",
    icon: "Cpu",
    badge: "Trending",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Research Paper Assistance",
    highlights: ["Python for AI, PyTorch & Scikit-Learn", "Prompt Engineering & LangChain RAG", "Fine-tuning LLMs & Agentic Systems", "FastAPI AI Model Deployment"],
    prerequisites: "Familiarity with Python syntax and foundational math/statistics",
    description: "Step into modern AI. Develop autonomous agents, document extraction bots, and computer vision pipelines using state-of-the-art frameworks."
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: "Smartphone",
    badge: "High Demand",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Play Store Deployment",
    highlights: ["Flutter (Dart) & React Native", "State Management (Redux/Provider)", "REST API Integration & Push Alerts", "Publishing to App Stores"],
    prerequisites: "Basic OOP concepts and interest in mobile app development",
    description: "Design and build cross-platform mobile apps for iOS and Android with intuitive fluid animations and offline cloud synchronization."
  },
  {
    id: "datascience",
    title: "Data Science & Business Analytics",
    icon: "Database",
    badge: "Industry Favorite",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Capstone Project",
    highlights: ["Data Wrangling with Pandas & NumPy", "Interactive PowerBI & Tableau Dashboards", "Advanced SQL & Database Queries", "Predictive Machine Learning Models"],
    prerequisites: "Interest in data, business analytics, and basic programming",
    description: "Learn to clean, model, analyze, and visualize real enterprise datasets to solve complex business decision problems."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    icon: "ShieldAlert",
    badge: "Crucial Tech",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Security Audit Lab",
    highlights: ["Network Security & Packet Analysis", "OWASP Top 10 Web Vulnerabilities", "Penetration Testing & Vulnerability Assessment", "Security Compliance & Zero-Trust"],
    prerequisites: "Basic networking concepts and interest in cyber defense",
    description: "Understand defensive and offensive security, vulnerability assessment, ethical penetration testing, and zero-trust security postures."
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    icon: "Cloud",
    badge: "Enterprise Standard",
    duration: "1 to 6 Months",
    mode: "Online / Hybrid Mode",
    stipendInfo: "Performance-Based Stipend + Cloud Lab Access",
    highlights: ["AWS & Cloud Fundamentals", "Docker Containerization & Multi-stage builds", "Kubernetes Orchestration Basics", "CI/CD Automation with GitHub Actions"],
    prerequisites: "Familiarity with Linux command line and modern software development",
    description: "Master modern cloud infrastructure, infrastructure-as-code, automated deployment pipelines, and scalable server management."
  }
];

export const INTERNSHIP_FAQS = [
  {
    q: "Are the internships at IR InfoTech paid?",
    a: "Yes, IR InfoTech offers performance-based paid internships and stipends for candidates who clear technical assessments and contribute directly to live client/in-house production modules. We also offer foundational training tracks with minimal subsidized fees covering mentor sessions, project evaluation, cloud labs, and ISO-standard verified certification."
  },
  {
    q: "Who is eligible to apply for the internship programs?",
    a: "Students pursuing B.Tech, B.E., BCA, MCA, B.Sc (IT/CS), Diploma in Engineering, or recent graduates eager to gain practical industry exposure. Passionate self-taught coders with portfolio projects are equally welcome."
  },
  {
    q: "What is the typical duration and time commitment?",
    a: "We offer 1-Month (Intensive Foundation), 2-Months (Standard Project), and 3-to-6-Months (Advanced Industry Capstone & Placement Track) durations. Schedules are flexible to accommodate college exams and semester schedules."
  },
  {
    q: "Will I receive a verifiable certificate after completion?",
    a: "Absolutely! Every intern receives an official Letter of Recommendation (LOR) and an IR InfoTech Digitally Verifiable Certificate equipped with a unique Credential ID and QR code, which can be verified anytime by prospective employers on our website."
  },
  {
    q: "What is the application and selection procedure?",
    a: "1. Fill out the online 'Apply Now' form on this site. 2. Our recruitment team reviews your profile and schedules a short 15-minute technical discovery call. 3. Upon selection, an official Offer & Onboarding Letter is dispatched with batch commencement details."
  },
  {
    q: "Is the internship conducted online or offline?",
    a: "We provide both flexible Online (Remote with daily mentor standups and Discord/Slack collaboration) and Hybrid options depending on batch openings and location requirements."
  }
];

export const CAREER_OPENINGS = [
  {
    id: "job-1",
    title: "Senior Full-Stack Engineer (React / Node / PostgreSQL)",
    type: "Full-Time · Hybrid",
    experience: "3+ Years",
    location: "Noida / Remote",
    description: "Lead the development of scalable enterprise web applications, optimize microservice architectures, and mentor junior developers.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "job-2",
    title: "AI / ML Solutions Engineer",
    type: "Full-Time · Remote",
    experience: "2+ Years",
    location: "Remote (India)",
    description: "Architect and fine-tune LLM pipelines, autonomous agents, and computer vision systems for global client automation projects.",
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "FastAPI"],
  },
  {
    id: "job-3",
    title: "DevOps & Cloud Infrastructure Architect",
    type: "Full-Time · Hybrid",
    experience: "3+ Years",
    location: "Noida / Remote",
    description: "Build robust CI/CD pipelines, manage Kubernetes clusters on AWS/GCP, implement zero-trust security policies, and maintain 99.98% uptime.",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "CI/CD", "Linux"],
  },
  {
    id: "job-4",
    title: "Student Training & Tech Mentor Lead",
    type: "Full-Time · On-Site/Hybrid",
    experience: "1.5+ Years",
    location: "Noida",
    description: "Conduct interactive code reviews, guide student interns on capstone web & AI projects, and manage internship curriculum quality.",
    skills: ["Web Dev", "Python/Java", "Git", "Mentorship", "Public Speaking"],
  }
];

export const TESTIMONIALS = [
  {
    name: "Arjun Verma",
    role: "Full-Stack Intern $\\rightarrow$ Placed at MNC",
    content: "The 3-month internship at IR InfoTech completely changed my trajectory. I wasn't just doing toy projects; I worked with real APIs, GitHub pull requests, and Docker containers. The verified certificate and mentor LOR were huge plus points in my campus placements!",
    rating: 5,
    tag: "Internship Alumnus"
  },
  {
    name: "Siddharth Mehra",
    role: "VP of Engineering, Apex Logistics",
    content: "IR InfoTech delivered our multi-warehouse ERP ahead of deadline. Their technical architecture is rock solid, and their responsiveness during post-deployment support is unmatched. Truly a world-class IT partner.",
    rating: 5,
    tag: "Enterprise Client"
  },
  {
    name: "Pooja Sharma",
    role: "AI & ML Intern $\\rightarrow$ Junior ML Engineer",
    content: "Building real RAG chatbots and computer vision pipelines gave me practical confidence that college textbooks never could. The mentor feedback was thorough, and the team atmosphere was super supportive.",
    rating: 5,
    tag: "Internship Alumna"
  },
  {
    name: "Vikram Singhania",
    role: "Founder, CarePlus Health Network",
    content: "We consulted IR InfoTech for our HIPAA telemedicine integration. Their deep expertise in cloud security and seamless WebRTC implementations saved us months of development time.",
    rating: 5,
    tag: "Enterprise Client"
  }
];

export const SAMPLE_CERTIFICATES = {
  "IR-2026-AI-892": {
    studentName: "Aman Gupta",
    domain: "Artificial Intelligence & Machine Learning",
    duration: "3 Months (Intensive Capstone)",
    issueDate: "October 24, 2026",
    grade: "Distinction (Grade A+)",
    credentialId: "IR-2026-AI-892",
    status: "Verified & Active",
    verificationUrl: "https://irinfotech.in/verify/IR-2026-AI-892",
    projectTitle: "Automated Enterprise Document OCR & LangChain RAG Intelligence",
    authorizedSignatory: "Head of Training & Technology, IR InfoTech"
  },
  "IR-2026-FS-104": {
    studentName: "Neha Sharma",
    domain: "Full-Stack Web Development",
    duration: "2 Months (Industry Project)",
    issueDate: "September 15, 2026",
    grade: "Excellence (Grade A)",
    credentialId: "IR-2026-FS-104",
    status: "Verified & Active",
    verificationUrl: "https://irinfotech.in/verify/IR-2026-FS-104",
    projectTitle: "Scalable B2B SaaS Customer Analytics Platform with Next.js & Supabase",
    authorizedSignatory: "Head of Training & Technology, IR InfoTech"
  },
  "IR-2026-CS-415": {
    studentName: "Rohan Das",
    domain: "Cybersecurity & Ethical Hacking",
    duration: "3 Months (Advanced Security Lab)",
    issueDate: "November 02, 2026",
    grade: "Distinction (Grade A+)",
    credentialId: "IR-2026-CS-415",
    status: "Verified & Active",
    verificationUrl: "https://irinfotech.in/verify/IR-2026-CS-415",
    projectTitle: "Automated Web Application Vulnerability Scanner & OWASP Hardening Suite",
    authorizedSignatory: "Head of Training & Technology, IR InfoTech"
  }
};
