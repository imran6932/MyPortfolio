
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const SmartDoc = () => {
  const techStack = [
    {
      name: "FastAPI",
      description: "REST APIs for document uploads and AI-powered question answering"
    },
    {
      name: "LangChain",
      description: "RAG pipeline and language model orchestration"
    },
    {
      name: "OpenAI GPT-4o-mini",
      description: "Generates natural-language answers from document context"
    },
    {
      name: "OpenAI Embeddings",
      description: "Converts document chunks into semantic vector representations"
    },
    {
      name: "FAISS",
      description: "Vector similarity search for retrieving relevant document chunks"
    },
    {
      name: "Redis",
      description: "IP-based rate limiting with automatic daily resets"
    },
    {
      name: "React + Vite",
      description: "Interactive document upload and chat interface"
    },
    {
      name: "Docker",
      description: "Containerized deployment of application services"
    }
  ];

  const features = [
    {
      title: "Document Upload",
      description: "Upload PDF, DOCX, and TXT documents up to 2 MB for processing",
      icon: "📄"
    },
    {
      title: "AI-Powered Q&A",
      description: "Ask questions in natural language and receive answers grounded in document content",
      icon: "🤖"
    },
    {
      title: "Retrieval-Augmented Generation",
      description: "Retrieve the four most relevant document chunks for specific questions",
      icon: "🧠"
    },
    {
      title: "Smart Context Detection",
      description: "Uses relevant chunks for specific questions and the full document for broader tasks such as summarization and review",
      icon: "🔍"
    },
    {
      title: "Multi-Turn Conversations",
      description: "Maintain conversation history within a document session",
      icon: "💬"
    },
    {
      title: "Rate Limiting",
      description: "Redis-backed limits of three uploads and twelve questions per IP per day",
      icon: "🔒"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="project-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-4">
                <Link to="/" className="btn btn-outline-primary">
                  ← Back to Home
                </Link>
              </div>

              <div className="text-center mb-5">
                <h1 className="project-main-title">SmartDoc</h1>
                <p className="project-subtitle">
                  AI-Powered Document Question Answering Platform
                </p>
              </div>

              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    SmartDoc is an AI-powered document assistant that allows
                    users to upload PDF, DOCX, and TXT files and ask questions
                    about their content using natural language. It combines
                    FastAPI, LangChain, OpenAI models, and a React frontend to
                    provide an interactive document analysis experience.
                  </p>
                  <p className="project-description">
                    The application implements a Retrieval-Augmented Generation
                    (RAG) pipeline using embeddings and FAISS vector search.
                    Specific questions are answered using relevant document
                    sections, while broader requests such as summarization and
                    review can use the full document context. Redis provides
                    IP-based rate limiting, and Docker simplifies deployment.
                  </p>
                </div>
              </div>

              <div className="project-section">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h2 className="section-title">Technical Stack</h2>
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <div key={index} className="tech-card">
                      <h3 className="tech-name">{tech.name}</h3>
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-section">
                <h2 className="section-title">Project Links</h2>
                <div className="content-card">
                  <p>
                    <a href="https://smartdoc.imranansari.in"
                       target="_blank" rel="noreferrer">
                      Live Application ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://api.smartdoc.imranansari.in/docs"
                       target="_blank" rel="noreferrer">
                      API Documentation ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/imran6932/SmartDoc"
                       target="_blank" rel="noreferrer">
                      GitHub Repository ↗
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartDoc;
