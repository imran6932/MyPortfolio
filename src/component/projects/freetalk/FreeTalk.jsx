
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const FreeTalk = () => {
  const techStack = [
    {
      name: "FastAPI",
      description: "Backend APIs for chat, conversation history, model listing, and administration"
    },
    {
      name: "Groq API",
      description: "Cloud-hosted language model inference for AI conversations"
    },
    {
      name: "React + Vite",
      description: "Responsive frontend for the conversational AI application"
    },
    {
      name: "Redis",
      description: "Persistent conversation history, user metadata, and session-related data"
    },
    {
      name: "React Admin Dashboard",
      description: "Separate interface for browsing users and viewing conversations"
    },
    {
      name: "HTTP Basic Authentication",
      description: "Protects administrative endpoints and dashboard access"
    },
    {
      name: "Docker",
      description: "Containerized backend and application deployment"
    }
  ];

  const features = [
    {
      title: "AI-Powered Conversations",
      description: "Chat with a language model through the Groq API, with model configuration managed through environment variables",
      icon: "🤖"
    },
    {
      title: "Multilingual Chat",
      description: "Supports conversations in Hindi, English, and Hinglish",
      icon: "🌍"
    },
    {
      title: "Dynamic Companion Persona",
      description: "Assigns a companion identity based on detected user gender, with a fallback identity when gender is unspecified",
      icon: "💬"
    },
    {
      title: "Persistent Chat History",
      description: "Stores conversation messages in Redis with a 30-day expiration period",
      icon: "💾"
    },
    {
      title: "Device Metadata",
      description: "Tracks device names and user activity metadata, including first-seen and last-seen timestamps",
      icon: "📱"
    },
    {
      title: "Dedicated Admin Dashboard",
      description: "Browse users, inspect full chat histories, and search or filter records by user ID, device, or gender",
      icon: "🛡️"
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
                <h1 className="project-main-title">FreeTalk</h1>
                <p className="project-subtitle">
                  AI Companion Chatbot with Admin Dashboard
                </p>
              </div>

              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    FreeTalk is a full-stack conversational AI application
                    built with React, FastAPI, Groq API, and Redis. It provides
                    a multilingual chatbot experience with Hindi, English, and
                    Hinglish support, along with a companion persona that
                    adapts based on detected user gender.
                  </p>
                  <p className="project-description">
                    The backend manages AI chat requests, model configuration,
                    user metadata, and persistent conversation history. A
                    separate React-based administration dashboard enables
                    authorized administrators to browse users, review their
                    conversations, and search or filter user records. Redis
                    stores chat history with a 30-day TTL.
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
                    <a href="https://freetalk.imranansari.in"
                       target="_blank" rel="noreferrer">
                      Live Application ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://api.freetalk.imranansari.in/docs"
                       target="_blank" rel="noreferrer">
                      API Documentation ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/imran6932/FreeTalk"
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

export default FreeTalk;
