import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const PushApp = () => {
  const techStack = [
    { name: "Python PyWebPush", description: "Real-time push notification delivery system for web browsers" },
    { name: "PostGIS", description: "Advanced geospatial database for location-based targeting" },
    { name: "Progressive Web App", description: "Cross-platform PWA with offline capabilities and native features" },
    { name: "Multi-Hazard APIs", description: "Integration with earthquake, volcano, and weather monitoring systems" },
    { name: "Geolocation API", description: "Browser-based location services for proximity detection" },
    { name: "Service Workers", description: "Background processing for notifications and offline functionality" }
  ];

  const features = [
    {
      title: "Emergency Alert System",
      description: "Real-time alerts for earthquakes, volcanic activity, and severe weather warnings",
      icon: "🚨"
    },
    {
      title: "Multi-Hazard Monitoring", 
      description: "Comprehensive disaster alerts including earthquakes, volcanoes, and weather events",
      icon: "🌋"
    },
    {
      title: "Privacy-First Design",
      description: "Minimal data collection - only location and notification permissions required",
      icon: "🔒"
    },
    {
      title: "Business Promotions",
      description: "Local businesses can send promotional messages to nearby users",
      icon: "📢"
    },
    {
      title: "Proximity Targeting",
      description: "Precise radius-based messaging within defined geographical areas",
      icon: "📍"
    },
    {
      title: "Instant Notifications",
      description: "Real-time push notifications delivered directly to user devices",
      icon: "⚡"
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
                <h1 className="project-main-title">Push-App PWA</h1>
                <p className="project-subtitle">Multi-Hazard Emergency Alert & Location-Based Notification System</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    Push-App is a comprehensive Progressive Web Application developed for Japan to 
                    deliver critical multi-hazard emergency alerts including earthquake evacuations, 
                    volcanic activity warnings, and severe weather notifications. The app prioritizes 
                    user privacy by requesting only essential permissions while providing life-saving 
                    disaster information across multiple natural hazard types.
                  </p>
                  <p className="project-description">
                    Beyond emergency services, the platform enables local businesses to engage 
                    with nearby customers through proximity-based promotional messages. Using 
                    advanced geospatial technology and real-time disaster monitoring systems, 
                    the app ensures rapid response capabilities for Japan's diverse natural disaster landscape.
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

export default PushApp;
