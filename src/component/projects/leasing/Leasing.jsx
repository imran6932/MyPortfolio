import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Leasing = () => {
  const techStack = [
    { name: "Django REST Framework", description: "API endpoints, user authentication" },
    { name: "Scrapy", description: "Daily scraping of car leasing data from leasing.com" },
    { name: "PostgreSQL", description: "Structured relational database for all data storage" },
    { name: "Celery", description: "Automated task scheduling and email notifications" },
    { name: "Redis", description: "Caching and message broker for background tasks" },
    { name: "Ubuntu", description: "Cloud deployment and hosting infrastructure" }
  ];

  const features = [
    {
      title: "Real-time Price Tracking",
      description: "Daily scraping ensures up-to-date pricing information is always available",
      icon: "📊"
    },
    {
      title: "Intelligent Watchlists", 
      description: "Users can create personalized watchlists and track price movements",
      icon: "👀"
    },
    {
      title: "Advanced Analytics",
      description: "Graphical visualizations for comparing cars and market trends",
      icon: "📈"
    },
    {
      title: "Smart Filtering",
      description: "Filter and compare cars by terms, companies, and derivatives",
      icon: "🔍"
    },
    {
      title: "Automated Reports",
      description: "Daily summary emails with market insights and alerts",
      icon: "📧"
    },
    {
      title: "Intuitive Dashboard",
      description: "User-friendly interface for detailed analysis and management",
      icon: "🎯"
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
                <h1 className="project-main-title">Leasing Scraper</h1>
                <p className="project-subtitle">Car Leasing Price Tracking Web Application</p>
              </div>

              {/* Project Overview */}
              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    The Leasing Scraper is a comprehensive web application designed to revolutionize 
                    car leasing price monitoring for businesses. Built for a client managing large 
                    vehicle fleets, this platform provides real-time competitive intelligence by 
                    automatically scraping and analyzing leasing data from major platforms daily.
                  </p>
                  <p className="project-description">
                    The system enables users to track price movements, create intelligent watchlists, 
                    and gain actionable insights through advanced analytics. With automated reporting 
                    and an intuitive dashboard, businesses can make data-driven decisions about their 
                    leasing strategies while staying ahead of market trends.
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

export default Leasing;
