import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Ifleet = () => {
  const techStack = [
    { name: "Django REST Framework", description: "Backend API development for fleet management operations" },
    { name: "MongoDB", description: "NoSQL database for storing geolocation data and vehicle information" },
    { name: "Celery", description: "Background task processing for real-time location updates" },
    { name: "Geolocation APIs", description: "Real-time GPS tracking and route optimization services" },
    { name: "Role-Based Access Control", description: "Advanced permission system for multi-level user management" },
    { name: "Real-time Tracking", description: "Live vehicle and driver monitoring with location updates" }
  ];

  const features = [
    {
      title: "Fleet Management",
      description: "Comprehensive tracking and management of drivers and vehicles across locations",
      icon: "🚚"
    },
    {
      title: "Branch Management", 
      description: "Multi-location support with branch-specific user access control",
      icon: "🏢"
    },
    {
      title: "Role-Based Access",
      description: "Admin controls for route creation and user permission management",
      icon: "👥"
    },
    {
      title: "Live Vehicle Tracking",
      description: "Real-time GPS monitoring of fleet vehicles and driver locations",
      icon: "📍"
    },
    {
      title: "Route Management",
      description: "Administrative tools for creating and optimizing delivery routes",
      icon: "🗺️"
    },
    {
      title: "Background Processing",
      description: "Automated location updates and data synchronization via Celery",
      icon: "⚙️"
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
                <h1 className="project-main-title">iFleet System</h1>
                <p className="project-subtitle">Fleet Management System for Japanese Client</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    iFleet is a sophisticated fleet management system developed for a Japanese client 
                    to efficiently track and manage drivers and vehicles across multiple locations. 
                    This project involved implementing significant enhancements to an existing fleet 
                    application while maintaining system reliability and performance.
                  </p>
                  <p className="project-description">
                    The system features advanced branch management capabilities, role-based access 
                    control, and real-time GPS tracking. With automated background processing for 
                    location updates and comprehensive administrative tools, iFleet provides a 
                    complete solution for modern fleet operations management.
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

export default Ifleet;
