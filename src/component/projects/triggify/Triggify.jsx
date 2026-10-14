import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Triggify = () => {
  const techStack = [
    { name: "Django REST Framework", description: "Robust API endpoints for user authentication and subscription management" },
    { name: "Google Authentication", description: "Secure and seamless user sign-in via Google OAuth integration" },
    { name: "PostgreSQL", description: "Advanced database for storing user data, triggers, posts, and interactions" },
    { name: "Celery + Redis", description: "Automated daily scraping of LinkedIn posts based on user-defined triggers" },
    { name: "Stripe Payment Gateway", description: "Secure subscription payment processing and billing management" },
    { name: "AWS EC2", description: "Scalable, high-availability cloud infrastructure deployment" }
  ];

  const features = [
    {
      title: "Smart Trigger System",
      description: "Define custom triggers with keywords, hashtags, and profiles for relevant content",
      icon: "🎯"
    },
    {
      title: "Automated Post Discovery", 
      description: "Daily LinkedIn post scraping based on your personalized trigger settings",
      icon: "🔍"
    },
    {
      title: "One-Click Engagement",
      description: "Automatically like and interact with posts directly from your dashboard",
      icon: "👍"
    },
    {
      title: "Daily Content Updates",
      description: "Fresh, relevant content delivered to your dashboard every day",
      icon: "📅"
    },
    {
      title: "Email Notifications",
      description: "Daily summaries of triggered posts and engagement activities",
      icon: "📧"
    },
    {
      title: "Analytics Dashboard",
      description: "Track engagement metrics and monitor automation performance",
      icon: "📊"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="project-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Back Button */}
              <div className="mb-4">
                <Link to="/" className="btn btn-outline-primary">
                  ← Back to Home
                </Link>
              </div>

              {/* Project Title */}
              <div className="text-center mb-5">
                <h1 className="project-main-title">Triggify</h1>
                <p className="project-subtitle">LinkedIn Automation & Engagement Platform</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    Triggify is an innovative LinkedIn automation platform that revolutionizes how 
                    professionals monitor and engage with relevant content. The platform enables users 
                    to set up intelligent triggers based on keywords, hashtags, and specific profiles 
                    to automatically discover and curate personalized LinkedIn content.
                  </p>
                  <p className="project-description">
                    With automated daily scraping, smart content curation, and one-click engagement 
                    features, Triggify helps professionals stay active on LinkedIn while saving 
                    valuable time. The subscription-based SaaS model provides scalable automation 
                    solutions for individuals and businesses looking to enhance their LinkedIn presence.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="project-section">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Triggify;
