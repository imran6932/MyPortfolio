import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Shotlocker = () => {
  const techStack = [
    { name: "Django REST Framework", description: "RESTful APIs for user authentication, score entry, and data retrieval" },
    { name: "Social Authentication", description: "Google and Apple social login integration for seamless user experience" },
    { name: "MySQL Database", description: "Secure storage for user information, golf rounds, and subscription details" },
    { name: "Stripe Integration", description: "Secure payment gateway for monthly and yearly subscriptions" },
    { name: "Ubuntu Server", description: "Reliable and scalable Linux-based server hosting" },
    { name: "Mobile-First Design", description: "Optimized mobile application for golf course use" }
  ];

  const features = [
    {
      title: "Social Authentication",
      description: "Quick registration and login via Google or Apple accounts for seamless access",
      icon: "🔐"
    },
    {
      title: "Round Creation", 
      description: "Create new rounds with course details, date, and number of holes",
      icon: "⛳"
    },
    {
      title: "Score Tracking",
      description: "Hole-by-hole shot recording and performance tracking across rounds",
      icon: "📊"
    },
    {
      title: "Performance Analytics",
      description: "Monitor progress over time with detailed scoring statistics",
      icon: "📈"
    },
    {
      title: "Subscription Management",
      description: "Flexible monthly or yearly subscription plans with secure payments",
      icon: "💳"
    },
    {
      title: "Course Management",
      description: "Track performance across different golf courses and locations",
      icon: "🏌️"
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
                <h1 className="project-main-title">Shotlocker</h1>
                <p className="project-subtitle">Golf Score Tracking & Performance Analytics System</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    Shotlocker is a comprehensive mobile application designed specifically for golfers 
                    who want to track their performance and improve their game. The app provides an 
                    intuitive platform for score tracking, round management, and performance analytics 
                    across different golf courses and playing conditions.
                  </p>
                  <p className="project-description">
                    With seamless social authentication through Google and Apple, users can quickly 
                    get started and focus on their game. The subscription-based model ensures 
                    sustainable service delivery while providing golfers with premium features for 
                    detailed performance analysis and progress tracking.
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

export default Shotlocker;
