import { Project, SkillCategory, ExperienceItem, Certification, EducationInfo } from '../types';

export const personalInfo = {
  fullName: "CH.N.S. VijayKumar",
  preferredName: "VijayKumar Chilumuru",
  title: "Information Technology Undergraduate & Full-Stack Developer",
  subtitles: [
    "Full-Stack Developer (MERN Stack)",
    "ServiceNow Certified Application Developer (CAD)",
    "ServiceNow Certified System Administrator (CSA)",
    "AI/ML Certified – SmartBridge (Rising Waters Project)",
    "AWS Cloud Practitioner Certified Enthusiast",
  ],
  summary: "Detail-oriented and highly motivated Information Technology undergraduate with a CGPA of 9.08 and industry certifications including ServiceNow Certified System Administrator (CSA), ServiceNow Certified Application Developer (CAD), and SmartBridge AI/ML Internship Certification. Experienced in developing web applications, machine learning predictive models (Rising Waters), enterprise issue tracking systems, coordinating technical events, and collaborating with faculty and student teams.",
  email: "chilumuruvijaykumar@gmail.com",
  phone: "+91 9581560892",
  location: "Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/vijaykumar-chilumuru-ba1a1732b/",
  github: "https://github.com/chilumuruvijay",
  cgpa: "9.08 / 10",
  graduationYear: "2027",
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Telugu", level: "Native / Mother Tongue" },
    { name: "Hindi", level: "Conversational Proficiency" },
  ],
  stats: [
    { label: "CGPA", value: "9.08/10", detail: "Information Technology" },
    { label: "ServiceNow Certifications", value: "CAD & CSA", detail: "Admin & App Developer" },
    { label: "AI/ML & Cloud", value: "Certified", detail: "SmartBridge AI/ML & AWS" },
    { label: "Campus Leadership", value: "Treasurer", detail: "ACM Student Chapter & SAINT" },
  ]
};

export const educationData: EducationInfo = {
  institution: "Gudlavalleru Engineering College",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology",
  cgpa: "9.08 / 10",
  expectedGraduation: "2027",
  location: "Andhra Pradesh, India",
  highlights: [
    "Maintained a stellar 9.08/10 CGPA across all academic semesters in Information Technology.",
    "Active student leader elected as Treasurer for both the ACM Student Chapter and SAINT branch organization.",
    "Completed competitive professional certifications in ServiceNow (CSA, CAD) alongside coursework.",
    "Organized multiple campus-wide technical workshops, hackathons, and symposiums in collaboration with faculty."
  ]
};

export const projectsData: Project[] = [
  {
    id: "insight-edu",
    title: "InsightEdu: Student Performance Tracker",
    subtitle: "End-to-end academic analytics and monitoring portal built with the MERN stack",
    category: "fullstack",
    categoryLabel: "Full Stack (MERN)",
    description: "A comprehensive web application engineered to monitor, analyze, and visualize student academic performance across semesters with distinct role-based access for students and faculty.",
    highlights: [
      "Developed a responsive web application to monitor and analyze student academic performance metrics in real-time.",
      "Implemented secure role-based login (RBAC) separating administrative faculty portals from student personal scorecards.",
      "Built dynamic, interactive visual dashboards displaying student grade trends, attendance statistics, and comparative analytical reports.",
      "Architected and managed optimized MongoDB document schemas with Mongoose indexing for high-efficiency data storage and fast aggregation queries."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    featured: true,
    githubUrl: "https://github.com/chilumuruvijay",
    liveUrl: "https://github.com/chilumuruvijay",
    completionDate: "Recent",
    role: "Full-Stack Developer",
    architectureDetails: [
      "Frontend: Component-driven React.js architecture with responsive UI layouts and real-time state management.",
      "Backend: RESTful API server powered by Express.js and Node.js with secure JWT session authentication.",
      "Database: MongoDB collections modeled for student profiles, course modules, semester marks, and faculty assignments."
    ]
  },
  {
    id: "rising-waters",
    title: "Rising Waters: AI/ML Flood & Water Level Prediction",
    subtitle: "Hydrological forecasting & flood risk machine learning model developed in SmartBridge internship",
    category: "cloud-ai",
    categoryLabel: "AI/ML & Predictive Modeling",
    description: "Flagship AI/ML project developed during the SmartBridge AI/ML Virtual Internship. Leverages Python, Pandas, and Scikit-Learn to preprocess rainfall and water-level telemetry, train predictive classification models, and output real-time inundation risk levels.",
    highlights: [
      "Engineered end-to-end data processing pipelines in Python (Pandas, NumPy) for meteorological rainfall and river discharge time series.",
      "Trained supervised machine learning algorithms (Random Forest, Logistic Regression, Decision Trees) to predict rising water severity with high accuracy.",
      "Implemented exploratory data analysis (EDA) with correlation heatmaps and feature importance distributions for flood risk indicators.",
      "Developed automated early-warning alert logic based on predictive risk probabilities to aid in disaster mitigation."
    ],
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "Data Analysis", "AI/ML", "Jupyter"],
    featured: true,
    githubUrl: "https://github.com/chilumuruvijay/Rising-Waters",
    liveUrl: "https://github.com/chilumuruvijay/Rising-Waters",
    completionDate: "SmartBridge AI/ML Internship",
    role: "AI/ML Developer & Intern",
    architectureDetails: [
      "Data Ingestion: Hydrological readings, rainfall index, and terrain elevation datasets.",
      "Modeling: Supervised learning models trained on historical flood events with cross-validation and confusion matrix auditing.",
      "Analytics: Evaluation metrics including Precision, Recall, F1-Score, and ROC-AUC curve benchmarking."
    ]
  },
  {
    id: "employee-raise-issue",
    title: "Employee Raise Issue & Resolution Portal",
    subtitle: "Enterprise employee grievance reporting and incident management application",
    category: "fullstack",
    categoryLabel: "Full Stack & Enterprise",
    description: "An enterprise internal issue tracking and grievance resolution platform designed to empower employees to raise workplace, technical, and facility concerns with automated priority routing, real-time status tracking, and administrative resolution workflows.",
    highlights: [
      "Developed an intuitive employee issue reporting system featuring structured categorization, severity levels, and department routing.",
      "Built role-based dashboards allowing employees to view real-time resolution progress and administrators to assign and resolve tickets.",
      "Implemented automated status lifecycle (Submitted, Under Review, In Progress, Resolved, Closed) with resolution timestamps.",
      "Ensured responsive, clean UI design with instant client-side validation and search filters across historical issues."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Tailwind CSS", "Git"],
    featured: true,
    githubUrl: "https://github.com/chilumuruvijay",
    liveUrl: "https://github.com/chilumuruvijay",
    completionDate: "Recent",
    role: "Full-Stack Developer",
    architectureDetails: [
      "Frontend: React component hierarchy with dynamic ticket status timeline and issue category filters.",
      "Backend: RESTful API routing for issue creation, status updates, employee assignment, and admin resolution comments.",
      "Database: Structured schema for employee tickets, severity flags, departmental tags, and resolution logs."
    ]
  },
  {
    id: "flight-finder",
    title: "Flight Finder Web Application",
    subtitle: "High-performance responsive flight search and booking inquiry platform",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    description: "A responsive, user-centric web application designed to help travelers search, compare, and display live flight routes and schedules with intuitive filtering and streamlined navigation.",
    highlights: [
      "Developed a modern, responsive web application to search, filter, and display flight information with minimal latency.",
      "Designed an intuitive, ergonomic user interface with clean visual hierarchy, quick date-pickers, and efficient route navigation.",
      "Greatly improved user experience through responsive fluid layouts, instant search feedback, and accessibility-first design principles.",
      "Implemented modular state handling for origin/destination airport pairing, passenger counts, and price bracket filtering."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "UI/UX Design", "Git"],
    featured: false,
    githubUrl: "https://github.com/chilumuruvijay",
    liveUrl: "https://github.com/chilumuruvijay",
    completionDate: "Recent",
    role: "Frontend Developer & UI Designer",
    architectureDetails: [
      "Interactive flight search engine with real-time filters by airline, departure time, and price range.",
      "Responsive card grid displaying flight duration, layovers, baggage allowances, and fare classes.",
      "Optimized for mobile touchscreens and desktop viewports with fluid CSS grid and flexbox styling."
    ]
  },
  {
    id: "servicenow-incident-portal",
    title: "ServiceNow Enterprise Incident & Request Automation",
    subtitle: "Custom workflow applications, client scripts, and business rules on ServiceNow",
    category: "servicenow",
    categoryLabel: "ServiceNow & Enterprise",
    description: "Enterprise service management applications built using ServiceNow CAD & CSA standards, incorporating automated business rules, UI policies, service catalog items, and incident lifecycle routing.",
    highlights: [
      "Leveraged ServiceNow Certified System Administrator (CSA) & Application Developer (CAD) competencies to create modular enterprise applications.",
      "Configured robust server-side Business Rules, Script Includes, and Client Scripts to automate incident prioritization and SLA triggers.",
      "Designed Service Catalog items with custom variable sets, dynamic UI policies, and automated approval notification workflows.",
      "Maintained strict data governance using Access Control Lists (ACLs) and role-specific module visibility."
    ],
    technologies: ["ServiceNow", "CSA", "CAD", "JavaScript", "GlideRecord API", "Workflow Automation", "ITIL"],
    featured: true,
    githubUrl: "https://github.com/chilumuruvijay",
    completionDate: "Certified Implementation",
    role: "ServiceNow Certified Application Developer",
    architectureDetails: [
      "Platform: ServiceNow Washington / Xanadu Developer Instance.",
      "Scripting: GlideSystem and GlideRecord server-side automation; UI Policies and Client Scripts on forms.",
      "Process Alignment: ITIL-compliant Incident, Problem, and Service Request Management workflows."
    ]
  },
  {
    id: "aws-cloud-architecture",
    title: "AWS Cloud Practitioner Scalable Infrastructure",
    subtitle: "Cloud architecture deployment, VPC configurations, and serverless hosting fundamentals",
    category: "cloud-ai",
    categoryLabel: "Cloud & AI/ML",
    description: "Virtual internship cloud solutions developed through SmartBridge, implementing fundamental AWS services including Amazon EC2, S3 static asset storage, IAM role security, and VPC networking.",
    highlights: [
      "Implemented resilient AWS cloud deployment architectures as part of the SmartBridge AWS Cloud Practitioner Virtual Internship.",
      "Configured secure IAM users, groups, and least-privilege security policies for application access control.",
      "Set up Amazon S3 bucket storage policies with versioning, static website hosting, and secure CDN distribution.",
      "Gained hands-on experience provisioning EC2 compute instances, security groups, and automated health checks."
    ],
    technologies: ["AWS", "Amazon S3", "Amazon EC2", "IAM", "VPC", "Cloud Practitioner", "Git"],
    featured: false,
    githubUrl: "https://github.com/chilumuruvijay",
    completionDate: "SmartBridge Internship",
    role: "Cloud Architecture Intern",
    architectureDetails: [
      "AWS foundational networking: Virtual Private Cloud (VPC), public/private subnets, and routing tables.",
      "Security: IAM role-based access control and TLS certificates for secure communication.",
      "Storage & Compute: S3 multi-region replication concept and auto-scaling EC2 instances."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core algorithmic and object-oriented foundations",
    skills: [
      { name: "Java", level: "Proficient", highlight: true, tag: "OOP & Problem Solving" },
      { name: "Python", level: "Proficient", highlight: true, tag: "Data, AI/ML & Scripting" },
      { name: "C", level: "Proficient", highlight: false, tag: "Systems & Data Structures" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true, tag: "Full-Stack Web" },
    ]
  },
  {
    id: "web-frontend",
    title: "Web & Frontend Engineering",
    iconName: "Layout",
    description: "Building responsive, modern, and high-performance user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true, tag: "Component Architecture" },
      { name: "HTML5", level: "Advanced", highlight: false, tag: "Semantic Markup" },
      { name: "CSS3", level: "Advanced", highlight: false, tag: "Responsive Styling" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true, tag: "Utility-First Design" },
      { name: "Responsive UI/UX", level: "Advanced", highlight: false, tag: "Mobile-First Design" },
    ]
  },
  {
    id: "backend-database",
    title: "Backend & Database",
    iconName: "Database",
    description: "Scalable server architectures and efficient storage systems",
    skills: [
      { name: "Node.js", level: "Proficient", highlight: true, tag: "Server Runtime" },
      { name: "Express.js", level: "Proficient", highlight: true, tag: "REST API Framework" },
      { name: "MongoDB", level: "Proficient", highlight: true, tag: "NoSQL Document DB" },
      { name: "SQL", level: "Proficient", highlight: false, tag: "Relational Queries" },
      { name: "RESTful APIs", level: "Advanced", highlight: false, tag: "Client-Server Protocol" },
    ]
  },
  {
    id: "servicenow-cloud",
    title: "ServiceNow & Cloud Platforms",
    iconName: "Cloud",
    description: "Enterprise SaaS development, workflow automation, and cloud fundamentals",
    skills: [
      { name: "ServiceNow (CAD)", level: "Advanced", highlight: true, tag: "Certified App Developer" },
      { name: "ServiceNow (CSA)", level: "Advanced", highlight: true, tag: "Certified System Admin" },
      { name: "Business Rules & Client Scripts", level: "Advanced", highlight: true, tag: "Workflow Automation" },
      { name: "AWS Cloud Fundamentals", level: "Proficient", highlight: true, tag: "EC2, S3, IAM, VPC" },
    ]
  },
  {
    id: "tools-workflow",
    title: "Tools & Version Control",
    iconName: "GitBranch",
    description: "Collaborative development and software engineering best practices",
    skills: [
      { name: "Git", level: "Advanced", highlight: true, tag: "Version Control" },
      { name: "GitHub", level: "Advanced", highlight: true, tag: "Collaboration & CI/CD" },
      { name: "VS Code", level: "Advanced", highlight: false, tag: "Development Environment" },
      { name: "Postman", level: "Proficient", highlight: false, tag: "API Testing" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "acm-treasurer",
    role: "Treasurer",
    organization: "ACM Student Chapter",
    period: "Active Leadership Role",
    location: "Gudlavalleru Engineering College",
    type: "Leadership",
    badge: "Elected Officer",
    points: [
      "Managed financial records, allocations, and budgeting activities for university ACM initiatives.",
      "Coordinated high-impact technical and non-technical events, hackathons, and guest lectures.",
      "Collaborated closely with faculty coordinators and student teams to ensure seamless event logistics and execution.",
      "Enhanced student engagement by organizing hands-on coding competitions and technical workshops."
    ],
    technologies: ["Budget Management", "Event Coordination", "Technical Leadership", "Team Collaboration"]
  },
  {
    id: "saint-treasurer",
    role: "Treasurer",
    organization: "SAINT (Branch Organisation)",
    period: "Active Leadership Role",
    location: "Gudlavalleru Engineering College",
    type: "Leadership",
    badge: "Branch Council",
    points: [
      "Coordinated technical symposiums and non-technical events for the Information Technology department.",
      "Supervised budget distribution, sponsorship accounting, and resource planning for departmental fests.",
      "Collaborated with faculty members and cross-functional student committees to ensure successful event execution."
    ],
    technologies: ["Financial Planning", "Resource Management", "Event Execution", "Public Speaking"]
  },
  {
    id: "smartbridge-aws",
    role: "AWS Cloud Practitioner Virtual Intern",
    organization: "SmartBridge",
    period: "Virtual Internship",
    location: "Online / Virtual",
    type: "Internship",
    badge: "Cloud Track",
    points: [
      "Gained comprehensive practical training on AWS Core Infrastructure services (EC2, S3, IAM, VPC).",
      "Configured cloud security standards, cost management monitoring, and elastic resource allocation.",
      "Implemented real-world architecture scenarios aligned with the AWS Certified Cloud Practitioner curriculum."
    ],
    technologies: ["AWS", "Amazon EC2", "Amazon S3", "IAM Security", "Cloud Architecture"]
  },
  {
    id: "smartbridge-fullstack",
    role: "Full Stack Developer Virtual Intern",
    organization: "SmartBridge",
    period: "Virtual Internship",
    location: "Online / Virtual",
    type: "Internship",
    badge: "MERN Stack",
    points: [
      "Built end-to-end full-stack web applications employing modern JavaScript, React.js, and Node.js.",
      "Integrated secure backend REST endpoints with MongoDB document databases and client-side state handling.",
      "Applied modern responsive UI design paradigms ensuring fast performance across desktop and mobile devices."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    id: "smartbridge-servicenow",
    role: "ServiceNow Virtual Intern",
    organization: "SmartBridge",
    period: "Virtual Internship",
    location: "Online / Virtual",
    type: "Internship",
    badge: "Now Platform",
    points: [
      "Trained on ServiceNow enterprise application development, workflow scripting, and platform administration.",
      "Developed custom application tables, form views, UI policies, and automated client scripts.",
      "Strengthened hands-on readiness for ServiceNow CSA and CAD global certifications."
    ],
    technologies: ["ServiceNow", "Now Platform", "CSA", "CAD", "GlideScript"]
  },
  {
    id: "smartbridge-aiml",
    role: "AI/ML Virtual Intern & Certified Graduate",
    organization: "SmartBridge",
    period: "Virtual Internship & Certified",
    location: "Online / Virtual",
    type: "Internship",
    badge: "AI/ML Certified",
    points: [
      "Completed rigorous AI & Machine Learning curriculum and earned the official SmartBridge AI/ML Internship Certification.",
      "Developed the flagship 'Rising Waters' predictive modeling project to forecast flood risks and hydrological trends from meteorological datasets.",
      "Engineered preprocessing pipelines in Python (Pandas, NumPy, Scikit-learn) handling historical precipitation and river flow telemetry.",
      "Trained and cross-validated supervised classification and regression models with confusion matrix benchmarking and feature importance ranking."
    ],
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Rising Waters Project", "Data Science"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "smartbridge-aiml-cert",
    title: "AI/ML Virtual Internship & Certification",
    issuer: "SmartBridge",
    type: "AI/ML",
    verified: true,
    date: "Certified Graduate",
    description: "Official credential certifying end-to-end Machine Learning proficiency, data preprocessing, and predictive hydrological modeling through the Rising Waters project.",
    badgeCode: "AI/ML"
  },
  {
    id: "servicenow-cad",
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    type: "ServiceNow",
    verified: true,
    date: "Certified Professional",
    description: "Validates ability to design, build, test, and implement custom applications on the ServiceNow Now Platform using server and client APIs, scripts, and workflows.",
    badgeCode: "CAD"
  },
  {
    id: "servicenow-csa",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    type: "ServiceNow",
    verified: true,
    date: "Certified Professional",
    description: "Validates technical knowledge and skills to manage, configure, and maintain a ServiceNow instance including user management, workflows, and database tables.",
    badgeCode: "CSA"
  },
  {
    id: "wadhwani-ignite",
    title: "Wadhwani Ignite India Certification",
    issuer: "Wadhwani Foundation",
    type: "Industry",
    verified: true,
    date: "Certified",
    description: "Entrepreneurship and technical innovation certification focused on problem solving, business acumen, and tech-driven scalable solutions.",
    badgeCode: "IGNITE"
  },
  {
    id: "aws-cloud-smartbridge",
    title: "AWS Cloud Practitioner Virtual Internship",
    issuer: "SmartBridge & AWS",
    type: "Cloud",
    verified: true,
    date: "Virtual Internship",
    description: "Hands-on certification in cloud fundamentals, AWS core services, architecture principles, billing, and security compliance.",
    badgeCode: "AWS"
  },
  {
    id: "fullstack-smartbridge",
    title: "Full Stack Developer Virtual Internship",
    issuer: "SmartBridge",
    type: "Development",
    verified: true,
    date: "Virtual Internship",
    description: "Comprehensive development credential demonstrating end-to-end MERN stack web application engineering and RESTful API deployment.",
    badgeCode: "MERN"
  }
];

export const achievementsData = [
  {
    metric: "9.08 / 10",
    title: "Cumulative Academic CGPA",
    description: "Demonstrated consistent academic excellence throughout B.Tech in Information Technology at Gudlavalleru Engineering College."
  },
  {
    metric: "Dual Certified",
    title: "ServiceNow CAD & CSA",
    description: "Attained both ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD) professional credentials."
  },
  {
    metric: "AI/ML Certified",
    title: "SmartBridge AI/ML Internship",
    description: "Completed AI/ML Virtual Internship with certification from SmartBridge, engineering the 'Rising Waters' predictive hydrological project."
  },
  {
    metric: "2x Elected",
    title: "Treasurer Leadership",
    description: "Elected as Treasurer for both the ACM Student Chapter and SAINT departmental organization, managing budgets and events."
  }
];
