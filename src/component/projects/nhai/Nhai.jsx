import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Nhai = () => {
  const techStack = [
    { name: "Django REST Framework", description: "Robust, scalable API for user authentication, project data, and reports" },
    { name: "MySQL", description: "Relational database for project details, user information, roles, and reports" },
    { name: "Celery", description: "Background task scheduling for automated report generation and reminders" },
    { name: "Ubuntu Server", description: "Reliable and scalable Linux-based server hosting" },
    { name: "JWT Authentication", description: "Secure user authentication and role-based access control" },
    { name: "SMTP Integration", description: "Automated email delivery for reports and deadline reminders" }
  ];

  const features = [
    {
      title: "Role-Based Dashboards",
      description: "Customized access for CALA, district collectors, commissioners, and principals",
      icon: "👥"
    },
    {
      title: "Real-time Project Tracking", 
      description: "Live monitoring of project progress, financials, and milestones",
      icon: "📊"
    },
    {
      title: "Automated Monthly Reports",
      description: "Automated report generation and email distribution to stakeholders",
      icon: "📋"
    },
    {
      title: "Smart Deadline Reminders",
      description: "Daily email reminders for CALAs about upcoming project deadlines",
      icon: "⏰"
    },
    {
      title: "Progress Analytics",
      description: "Comprehensive analytics and insights on project performance",
      icon: "📈"
    },
    {
      title: "Secure Access Control",
      description: "JWT-based authentication with role-specific permissions",
      icon: "🔐"
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
                <h1 className="project-main-title">NHAI Project Tracker</h1>
                <p className="project-subtitle">Road Project Tracking Web Application for Maharashtra</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    The NHAI Project Tracker is a comprehensive web application designed to streamline 
                    the tracking and management of road projects across Maharashtra. This government 
                    solution provides role-based dashboards for key stakeholders including CALA officers, 
                    district collectors, commissioners, and principals.
                  </p>
                  <p className="project-description">
                    Each user role has tailored access to relevant project data, with automated monthly 
                    progress reports and daily deadline reminders delivered via email. The system ensures 
                    transparency, accountability, and efficient project management across the entire 
                    highway development network.
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

export default Nhai;
