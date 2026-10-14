
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const FastMart = () => {
  const techStack = [
    {
      name: "Django REST Framework",
      description: "REST APIs for authentication, products, carts, orders, and delivery workflows"
    },
    {
      name: "PostgreSQL + PostGIS",
      description: "Relational data storage and geospatial queries for warehouse serviceability"
    },
    {
      name: "Django Channels",
      description: "WebSocket communication for live rider locations and order status events"
    },
    {
      name: "Redis",
      description: "Real-time communication channel layer and WebSocket message broker"
    },
    {
      name: "Celery",
      description: "Background task execution and scheduled task processing"
    },
    {
      name: "React + Vite",
      description: "Separate customer, rider, and admin web applications"
    },
    {
      name: "Leaflet + OpenStreetMap",
      description: "Interactive maps for rider tracking, warehouses, and delivery routes"
    },
    {
      name: "Razorpay",
      description: "Online payment integration for customer checkout"
    },
    {
      name: "OSRM",
      description: "Road-based route calculation between warehouses and delivery addresses"
    },
    {
      name: "Docker + Nginx",
      description: "Containerized backend services and production web hosting"
    }
  ];

  const features = [
    {
      title: "Product Catalog & Cart",
      description: "Browse products by category, manage cart quantities, and proceed through checkout",
      icon: "🛒"
    },
    {
      title: "Online Payments",
      description: "Integrates Razorpay to support payment processing during checkout",
      icon: "💳"
    },
    {
      title: "Real-Time GPS Tracking",
      description: "Broadcast rider GPS coordinates every 10 seconds and display live delivery positions",
      icon: "📍"
    },
    {
      title: "Geospatial Serviceability",
      description: "Use PostGIS queries to identify suitable warehouses and validate delivery availability by location",
      icon: "🌍"
    },
    {
      title: "Rider Management",
      description: "Riders can manage duty status, view assigned orders, and track delivery routes",
      icon: "🛵"
    },
    {
      title: "Admin Dashboard",
      description: "Manage products, categories, riders, warehouses, and orders with map-based monitoring",
      icon: "🏢"
    },
    {
      title: "Live Route Visualization",
      description: "Display road-based delivery routes using OSRM and interactive maps",
      icon: "🗺️"
    },
    {
      title: "Real-Time Updates",
      description: "Use WebSockets to stream rider locations and order status changes to connected clients",
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
              <div className="mb-4">
                <Link to="/" className="btn btn-outline-primary">
                  ← Back to Home
                </Link>
              </div>

              <div className="text-center mb-5">
                <h1 className="project-main-title">FastMart</h1>
                <p className="project-subtitle">
                  Multi-Role E-Commerce and Delivery Platform
                </p>
              </div>

              <div className="project-section">
                <h2 className="section-title">Project Overview</h2>
                <div className="content-card">
                  <p className="project-description">
                    FastMart is a full-stack e-commerce and same-day delivery
                    platform built with Django REST Framework and React. It
                    connects customers, delivery riders, and administrators
                    through three dedicated web applications, supporting
                    product browsing, online ordering, order management, and
                    delivery tracking.
                  </p>
                  <p className="project-description">
                    The platform combines PostgreSQL and PostGIS for
                    location-based warehouse queries with Django Channels,
                    Redis, and WebSockets for real-time updates. Customers can
                    track rider locations, riders can view assigned orders
                    and routes, and administrators can manage products,
                    warehouses, riders, and deliveries from a centralized
                    dashboard.
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
                    <a href="https://fastmart.imranansari.in"
                       target="_blank" rel="noreferrer">
                      Customer Application ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://rider.fastmart.imranansari.in"
                       target="_blank" rel="noreferrer">
                      Rider Application ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://admin.fastmart.imranansari.in"
                       target="_blank" rel="noreferrer">
                      Admin Dashboard ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://api.fastmart.imranansari.in/api/docs/"
                       target="_blank" rel="noreferrer">
                      API Documentation ↗
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/imran6932/FastMart"
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

export default FastMart;
