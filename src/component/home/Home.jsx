import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { useEffect, useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('project-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
const skills = [
  // Backend Development
  { src: "/Images/python.png", alt: "Python", category: "Backend" },
  { src: "/Images/django.png", alt: "Django", category: "Framework" },
  { src: "/Images/drf.png", alt: "Django REST Framework", category: "Framework" },
  { src: "/Images/fastapi.png", alt: "FastAPI", category: "Framework" },

  // Databases & Caching
  { src: "/Images/pgsql.png", alt: "PostgreSQL", category: "Database" },
  { src: "/Images/mysql.png", alt: "MySQL", category: "Database" },
  { src: "/Images/mongodb.png", alt: "MongoDB", category: "Database" },
  { src: "/Images/redis.png", alt: "Redis", category: "Caching" },
  { src: "/Images/celery.png", alt: "Celery", category: "Task Queue" },

  // AI & LLM Integration
  { src: "/Images/genai.png", alt: "Generative AI", category: "AI" },
  { src: "/Images/langchain.png", alt: "LangChain", category: "AI Framework" },
  { src: "/Images/faiss.png", alt: "FAISS", category: "Vector Search" },
  { src: "/Images/rag.png", alt: "RAG", category: "AI Architecture" },
  {src: "/Images/embeddings.png", alt: "Embeddings", category: "AI Technique"},

  // Cloud & DevOps
  { src: "/Images/aws.png", alt: "AWS", category: "Cloud" },
  { src: "/Images/docker.png", alt: "Docker", category: "DevOps" },
  { src: "/Images/git.png", alt: "Git", category: "Version Control" },

  // Frontend
  { src: "/Images/html.png", alt: "HTML5", category: "Frontend" },
  { src: "/Images/css.png", alt: "CSS3", category: "Styling" },
  { src: "/Images/Js.png", alt: "JavaScript", category: "Frontend" },
  { src: "/Images/react.png", alt: "React", category: "Frontend" },

  // Tools & Integrations
  { src: "/Images/postman.png", alt: "Postman", category: "API Testing" },
  { src: "/Images/stripe.png", alt: "Stripe", category: "Payment" }
];


  const projects = [
    {
      to: "/fastmart",
      title: "FastMart - Grocery Delivery Platform",
      desc: "Full-stack grocery delivery platform with online ordering, Razorpay payments, real-time rider tracking, and geospatial warehouse serviceability.",
      tech: ["Django REST Framework", "PostgreSQL", "PostGIS", "Celery", "Redis", "WebSockets", "React"],
      isPersonalProject: true
    },
    {
      to: "/smartdoc",
      title: "SmartDoc - AI Document Assistant",
      desc: "AI-powered document assistant with RAG-based question answering, semantic search, and context-aware document analysis.",
      tech: ["Python", "FastAPI", "LangChain", "RAG", "React", "Redis", "Docker"],
      isPersonalProject: true
    },
    {
      to: "/freetalk",
      title: "FreeTalk - AI Companion Chatbot",
      desc: "AI companion chatbot with multilingual conversations, dynamic companion personas, persistent chat history, and an admin dashboard for user and conversation management.",
      tech: ["FastAPI", "React", "Groq API", "Redis", "Docker"],
      isPersonalProject: true 
    },
    {
      to: "/ifleet",
      title: "iFleet System",
      desc: "Fleet management system for Japanese client with real-time vehicle tracking, branch management, and role-based access control.",
      tech: ["DRF", "MongoDB", "Celery", "Geolocation", "PostgreSQL"],
      isPersonalProject: false
    },
    {
      to: "/push-app",
      title: "Push-App PWA",
      desc: "Multi-hazard emergency alert system for earthquakes, volcanic activity, weather warnings, and location-based promotions in Japan.",
      tech: ["Python", "PyWebPush", "PostGIS", "DRF", "Celery"],
      isPersonalProject: false
    },
    {
      to: "/leasing-scraper",
      title: "Leasing Scraper",
      desc: "Car leasing price tracking web application with real-time data scraping, intelligent watchlists, and automated market analysis.",
      tech: ["DRF", "Scrapy", "PostgreSQL", "Celery"],
      isPersonalProject: false
    },
    {
      to: "/nhai",
      title: "NHAI Portal",
      desc: "Government portal for highway project management with document workflow automation, compliance tracking, and detailed analytics.",
      tech: ["Python", "DRF", "Ubuntu", "MySQL", "Celery"],
      isPersonalProject: false
    },
    {
      to: "/shotlocker",
      title: "Shotlocker",
      desc: "Golf shot tracking and analytics app with social features, performance metrics, and AI-powered insights for improvement.",
      tech: ["DRF", "stripe", "MySQL"],
      isPersonalProject: false
    },
    {
      to: "/triggify",
      title: "Triggify",
      desc: "Event-driven automation platform for cloud and SaaS workflows with real-time monitoring and intelligent rule engine.",
      tech: ["Python", "DRF", "PostgreSQL", "stripe", "Celery"],
      isPersonalProject: false
    },
  ];

  
const experiences = [
  {
    role: "Independent Software Developer",
    company: "Personal Projects",
    duration: "Aug 2025 – Present",
    type: "Independent",
    responsibilities: [
      "Developed SmartDoc, an AI-powered document assistant using Retrieval-Augmented Generation (RAG), embeddings, and vector search",
      "Built FreeTalk, an AI companion chatbot integrating the Groq API with multilingual conversations and persistent chat history",
      "Developed FastMart, a full-stack grocery delivery platform with REST APIs, payment integration, geospatial serviceability, and real-time rider tracking",
      "Designed and implemented backend APIs, database models, and application integrations using Python, Django REST Framework, and FastAPI",
      "Worked with PostgreSQL, Redis, Docker, and cloud deployment workflows to build and deploy applications"
    ]
  },
  {
    role: "Software Engineer",
    company: "Friends Corp.",
    duration: "Feb 2025 – Aug 2025",
    type: "Remote",
    responsibilities: [
      "Designed, developed, and tested software solutions to meet project requirements",
      "Collaborated with product managers, architects, and stakeholders to translate business requirements into technical implementations",
      "Analyzed application behavior, refactored code, and improved performance and maintainability",
      "Contributed to API development, debugging, and technical documentation",
      "Worked with team members to deliver reliable software features"
    ]
  },
  {
    role: "Django Developer",
    company: "Relu Consultancy",
    duration: "Oct 2021 – Jan 2025",
    type: "Remote",
    responsibilities: [
      "Developed and maintained web applications and REST APIs using Python, Django, and Django REST Framework",
      "Designed and managed MySQL and PostgreSQL databases, including schema design and query optimization",
      "Deployed and maintained applications in Linux and AWS environments",
      "Troubleshot backend and server-side issues to improve application reliability and performance",
      "Configured deployment infrastructure and supported application maintenance"
    ]
  }
];


  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <header className="hero-section" id="home-content">
        <div className="container hero-inner">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className={`col-lg-6 mb-4 mb-lg-0 ${isVisible ? 'fade-in-up' : ''}`}>
              <h1 className="hero-title">
                <span className="gradient-text">Imran Ansari</span>
                <br />
                <span className="role-subtitle">Python Backend Developer</span>
              </h1>
              <p className="hero-tagline">
                Python Backend & Full Stack Developer with nearly 4 years of professional experience building and deploying web applications and APIs with Django, Django REST Framework, and FastAPI. Skilled in PostgreSQL, Redis, Celery, Docker, and AWS, with a focus on database optimization and reliable, production-ready deployments. Recently expanded into GenAI and full-stack development, building RAG-based document Q&A and conversational AI applications with LangChain, OpenAI, and FAISS, alongside React frontends. Passionate about shipping fast, dependable software that people actually enjoy using.
              </p>
              <div className="hero-cta-group">
                <a href="mailto:imransxcr53@gmail.com" className="modern-btn btn-primary">
                  <span>Get In Touch</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
                <button onClick={scrollToProjects} className="modern-btn btn-secondary">
                  <span>View Projects</span>
                </button>
              </div>
            </div>
            <div className={`col-lg-6 text-center ${isVisible ? 'fade-in-up animate-delay-200' : ''}`}>
              <div className="profile-wrapper">
                <img
                  src="/Images/imran.jpg"
                  className="profile-img"
                  alt="Imran Ansari - Full-Stack Developer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="experience-container section-padding" id="experience-content">
        <div className="container">
          <h2 className="section-heading">Experience</h2>
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              {experiences.map((exp, index) => (
                <article key={index} className={`experience-block ${isVisible ? 'fade-in-up' : ''}`} 
                         style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="role-heading">{exp.role}</h3>
                      <p className="meta-text">
                        {exp.company} · {exp.type} · {exp.duration}
                      </p>
                    </div>
                    <span className="badge bg-primary px-3 py-2 rounded-pill">{exp.type}</span>
                  </div>
                  <ul className="responsibility-list">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skill-container section-padding" id="skills-container">
        <div className="container">
          <h2 className="section-heading text-center">Technical Skills</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
            {skills.map((skill, index) => (
              <div key={skill.alt} className="col">
                <div className={`skill-item h-100 ${isVisible ? 'fade-in-up' : ''}`}
                     style={{animationDelay: `${0.5 + index * 0.05}s`}}>
                  <img src={skill.src} alt={skill.alt} loading="lazy" />
                  <div className="skill-label">{skill.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-padding" id="project-content">
        <div className="container">
          <h2 className="section-heading text-center">Featured Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project, index) => (
              <div className="col" key={project.to}>
                <Link to={project.to} className={`project-card h-100 ${isVisible ? 'fade-in-up' : ''}`}
                      style={{animationDelay: `${0.7 + index * 0.1}s`}}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    {/* <h3 className="project-title">{project.title}</h3> */}
                    <div className="project-title-wrapper">
                      <h3 className="project-title">{project.title}</h3>
                      {project.isPersonalProject && (
                        <span className="project-type-badge">Personal</span>
                      )}
                    </div>  
                  </div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary me-2 mb-1" style={{fontSize: '0.7rem'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="project-link">
                    Explore Project 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '0.5rem'}}>
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
