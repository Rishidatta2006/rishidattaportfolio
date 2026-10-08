// Edit everything about the portfolio content here.

export const profile = {
  name: "M. Rishi Datta",
  role: "Software Engineer | Full-Stack Developer | AI & Cloud Systems Builder",
  location: "Chennai, Tamil Nadu, India",
  email: "rishidatta4801@gmail.com",
  github: "https://github.com/Rishidatta2006",
  linkedin: "https://linkedin.com/in/rishi-datta-manda-6a27b8312",
  // RESUME PLACEHOLDER: drop your PDF into /public (e.g. public/resume.pdf)
  // and set this to "/resume.pdf". While null, resume buttons ask by email.
  resumeUrl: null as string | null,
};

export const credibility = [
  { value: "8.91/10", label: "CGPA" },
  { value: "5th", label: "Project Expo Place" },
  { value: "AWS", label: "Certified Cloud Practitioner" },
  { value: "2027", label: "Expected Graduation" },
];

export const principles = [
  { n: "01", title: "Understand the Problem", text: "Pin down who it's for, what's actually broken, and what “working” should mean." },
  { n: "02", title: "Design the System", text: "Sketch the data model, the APIs and how the pieces talk before writing much code." },
  { n: "03", title: "Build & Integrate", text: "Backend, frontend, database and AI pieces wired together end to end." },
  { n: "04", title: "Test, Debug & Improve", text: "Find what breaks, understand why, and tighten the design around it." },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  label?: string;
  achievement?: string;
  problem: string;
  description: string;
  built: string[];
  focus: string[];
  stack: string[];
  github?: string;
  flow?: string[];
  detail: {
    solution: string;
    decisions: string[];
    architecture: string;
    challenges: string[];
    learned: string[];
  };
};

export const projects: Project[] = [
  {
    id: "nextgenrecruit",
    index: "01",
    name: "NextGenRecruit",
    tagline: "AI-Powered Recruitment & Assessment Platform",
    achievement: "5th Place — NWC Department Project Expo 2026",
    problem: "Hiring often runs across scattered spreadsheets, emails and manual resume screening, with no single flow for applicants, recruiters and admins.",
    description:
      "An end-to-end recruitment platform designed to replace fragmented manual hiring workflows with a structured applicant, recruiter, and administrator experience.",
    built: [
      "Built the application using Python/FastAPI, ReactJS and MySQL.",
      "Developed REST APIs for authentication, job management, resume processing and assessment workflows.",
      "Designed applicant, recruiter and admin workflows.",
      "Designed relational database structures for users, jobs, applications and assessment results.",
      "Integrated Sentence Transformer embeddings and semantic similarity for resume-to-job matching.",
      "Focused on modular backend design and maintainability.",
    ],
    focus: ["Backend APIs", "Relational data modeling", "Semantic matching", "Role-based workflows"],
    stack: ["Python", "FastAPI", "ReactJS", "MySQL", "REST APIs", "NLP", "Sentence Transformers"],
    github: "https://github.com/Rishidatta2006/nextgen-recruit-ai",
    flow: ["Applicant", "Resume", "Embeddings", "Job match", "Assessment", "Recruiter"],
    detail: {
      solution: "One platform with separate applicant, recruiter and admin experiences, backed by a FastAPI service and a MySQL schema built around jobs, applications and assessments.",
      decisions: [
        "Split the backend into modules per domain (auth, jobs, resumes, assessments) to keep it maintainable.",
        "Used sentence embeddings + semantic similarity instead of keyword matching for resume-to-job fit.",
        "Modeled users, jobs, applications and results relationally so workflows stay consistent.",
      ],
      architecture: "React frontend → FastAPI REST layer → MySQL, with an NLP module that embeds resumes and job descriptions and scores similarity.",
      challenges: ["Keeping three role-based workflows consistent over shared data.", "Turning free-form resume text into something comparable to job requirements."],
      learned: ["Designing APIs around workflows, not just tables.", "Practical use of embeddings in a real application flow."],
    },
  },
  {
    id: "smart-waste",
    index: "02",
    name: "Smart Waste Management Dashboard",
    tagline: "Citizen reports → prioritized collection",
    problem: "Waste collection can become inefficient when staff do not know which reported locations require attention first.",
    description:
      "A smart waste-management workflow that connects citizen reports with AI-assisted waste assessment and operational prioritization.",
    built: [
      "Citizen reporting flow capturing an image and GPS location.",
      "Backend processing with AI-assisted image analysis to estimate waste severity.",
      "Staff dashboard ordering reports by priority, with nearest-first routing.",
    ],
    focus: ["Full-stack architecture", "Backend APIs", "AI-assisted image analysis", "Location-aware workflows", "Operational prioritization", "User-centric design"],
    stack: ["React", "Vite", "FastAPI", "Supabase", "AI/Image Analysis", "GPS"],
    github: "https://github.com/Rishidatta2006/smart-waste-management-dashboard",
    flow: ["Citizen Report", "Image + GPS", "Backend Processing", "Waste Severity / Priority", "Staff Dashboard", "Collection Prioritization", "Nearest-First Routing"],
    detail: {
      solution: "A reporting app for citizens and a dashboard for staff, joined by a backend that scores each report and orders the work.",
      decisions: [
        "Attach GPS to every report so prioritization can be location-aware.",
        "Use AI image analysis to estimate severity rather than relying only on manual triage.",
        "Combine severity and distance to suggest a nearest-first collection order.",
      ],
      architecture: "React + Vite frontend → FastAPI backend → Supabase for data, with an image-analysis step in the report pipeline.",
      challenges: ["Turning a photo into a usable priority signal.", "Built within a time-boxed development challenge."],
      learned: ["Designing around an operational decision, not just data display.", "Scoping a full-stack build to what can be finished well."],
    },
  },
  {
    id: "bharat-rail",
    index: "03",
    name: "Bharat Rail",
    tagline: "Tatkal Load Balancing Concept",
    label: "Concept / System Design",
    problem: "Tatkal booking opens at a fixed time nationwide, concentrating huge demand on the system in a very short window.",
    description:
      "A conceptual railway reservation architecture exploring how peak Tatkal demand could be distributed across regional booking windows to reduce concentrated load and improve system resource utilization.",
    built: [
      "Analyzed the peak-demand problem behind simultaneous Tatkal openings.",
      "Explored regional partitioning to spread load across booking windows.",
      "Modeled database and concurrency considerations for seat allocation.",
    ],
    focus: ["Peak-demand problem", "Load distribution", "Regional partitioning", "Database considerations", "Concurrency", "Scalability & trade-offs"],
    stack: ["Python", "MySQL", "DBMS", "System Design"],
    github: "https://github.com/Rishidatta2006/bharat-rail",
    flow: ["Peak demand", "Regional windows", "Partitioned load", "Concurrent booking", "Seat consistency"],
    detail: {
      solution: "A design concept that staggers booking windows by region so load is distributed instead of hitting the system all at once. Not a production railway system.",
      decisions: [
        "Partition demand regionally to flatten the peak.",
        "Treat seat allocation as a concurrency problem that needs consistent locking or transactions.",
        "Keep the database design aware of partition boundaries.",
      ],
      architecture: "Regional booking windows → partitioned request handling → transactional seat allocation in MySQL.",
      challenges: ["Fairness across regions vs. load reduction.", "Avoiding double-booking under concurrent requests."],
      learned: ["Thinking about bottlenecks before features.", "Every scaling choice has a trade-off worth writing down."],
    },
  },
  {
    id: "construction",
    index: "04",
    name: "Construction Planning & Workforce Platform",
    tagline: "Cloud-based planning and execution",
    problem: "Engineering inputs for construction often don't translate cleanly into structured plans and day-to-day workforce execution.",
    description:
      "A cloud-oriented construction planning and workforce execution platform designed to convert engineering inputs into structured planning and execution workflows.",
    built: [
      "Backend APIs for planning and workforce execution workflows.",
      "Role-based workflows for the people involved in planning and execution.",
      "Cloud architecture with an event-driven backend design.",
    ],
    focus: ["Backend APIs", "Cloud architecture", "Role-based workflows", "Event-driven backend", "AI-assisted planning"],
    stack: ["FastAPI", "AWS", "AI", "Event-Driven Architecture"],
    flow: ["Planning", "Workforce Execution", "Prediction / Insights"],
    detail: {
      solution: "A platform that moves from planning to execution to insights, with role-based access at each stage.",
      decisions: [
        "Event-driven backend so stages can react to changes independently.",
        "Role-based workflows to separate planning and execution responsibilities.",
        "AI-assisted planning treated as a supporting module, not the core.",
      ],
      architecture: "FastAPI services on an AWS-oriented, event-driven architecture. Some cloud services and AI modules are architected or prototyped rather than production-deployed.",
      challenges: ["Mapping engineering inputs into structured workflow data.", "Designing events between planning and execution cleanly."],
      learned: ["Cloud architecture is about boundaries and responsibilities.", "Being explicit about what's built vs. designed."],
    },
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "SQL", "C"] },
  { title: "Backend", items: ["FastAPI", "REST APIs"] },
  { title: "Frontend", items: ["ReactJS", "HTML5", "CSS3"] },
  { title: "Databases", items: ["MySQL", "Database Management", "Data Modeling"] },
  { title: "Cloud", items: ["AWS", "Cloud Computing", "Cloud Architecture Fundamentals"] },
  { title: "AI / ML", items: ["Generative AI", "NLP", "Semantic Similarity", "Sentence Transformers", "Machine Learning Fundamentals"] },
  { title: "Engineering", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design", "SDLC", "Full-Stack Development", "Problem Solving"] },
  { title: "Tools", items: ["Git", "GitHub"] },
];

export const experience = {
  role: "Networking Virtual Intern",
  org: "AICTE EduSkills Virtual Internship — supported by Zscaler",
  period: "Apr 2025 – Jun 2025",
  text: "Completed a 10-week virtual internship covering TCP/IP, routing, switching, DNS, DHCP, firewalls, VPNs and network security through virtual labs and simulated real-world scenarios.",
  tags: ["Troubleshooting", "Analytical problem solving", "Network fundamentals", "Secure communication"],
};

export const achievements = [
  { title: "5th Place — NWC Department Project Expo 2026", sub: "NextGenRecruit" },
  { title: "Rank 79 — SRMJEEE", sub: "SRM Joint Engineering Entrance Exam" },
  { title: "75% Tuition Fee Scholarship", sub: "SRM Institute of Science and Technology" },
];

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", period: "Mar 2026 – Mar 2029" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", period: "Oct 2025 – Oct 2027" },
  { title: "Python for Data Science", issuer: "IBM", period: "Mar 2025" },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering — Cloud Computing",
  school: "SRM Institute of Science and Technology, Kattankulathur",
  period: "Expected 2027",
  cgpa: "8.91/10",
};

// Descriptions only where the repository itself has one on GitHub.
export const repos = [
  { name: "nextgen-recruit-ai", title: "NextGenRecruit", url: "https://github.com/Rishidatta2006/nextgen-recruit-ai" },
  { name: "smart-waste-management-dashboard", title: "Smart Waste Management Dashboard", url: "https://github.com/Rishidatta2006/smart-waste-management-dashboard", description: "Built within a 2-hour development challenge using React, FastAPI, Supabase and AI-assisted development." },
  { name: "bharat-rail", title: "Bharat Rail", url: "https://github.com/Rishidatta2006/bharat-rail" },
  { name: "global-economic-indicators-dashboard", title: "Global Economic Indicators Dashboard", url: "https://github.com/Rishidatta2006/global-economic-indicators-dashboard", description: "Analyze and predict global economic trends using IMF datasets, interactive visualizations, and machine learning models." },
  { name: "resume-ats-analyzer", title: "Resume ATS Analyzer", url: "https://github.com/Rishidatta2006/resume-ats-analyzer" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
