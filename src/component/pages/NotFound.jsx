import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div 
        style={{
          minHeight: '100vh',
          background: 'var(--bg-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div 
                style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-3xl)'
                }}
              >
                <div className="mb-4">
                  <h1 
                    className="gradient-text"
                    style={{
                      fontSize: 'clamp(4rem, 8vw, 8rem)',
                      fontWeight: '900',
                      lineHeight: '1',
                      marginBottom: '1rem'
                    }}
                  >
                    404
                  </h1>
                  <h2 
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: '700',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Page Not Found
                  </h2>
                  <p 
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                      lineHeight: '1.6',
                      marginBottom: '2rem',
                      maxWidth: '400px',
                      margin: '0 auto 2rem'
                    }}
                  >
                    Oops! The page you're looking for seems to have wandered off into the digital void. 
                    Let's get you back on track.
                  </p>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  <Link 
                    to="/" 
                    className="modern-btn btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Back to Home</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                  </Link>
                  
                  <Link 
                    to="/#project-content" 
                    className="modern-btn btn-secondary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Projects</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                    </svg>
                  </Link>
                </div>

                <div 
                  style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-primary)'
                  }}
                >
                  <h3 
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}
                  >
                    Quick Navigation
                  </h3>
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                      gap: '0.75rem'
                    }}
                  >
                    {[
                      { to: "/#experience-content", label: "Experience", icon: "💼" },
                      { to: "/#skills-container", label: "Skills", icon: "⚡" },
                      { to: "mailto:imranansari.in.official@gmail.com", label: "Contact", icon: "📧" },
                      { to: "https://blog.imranansari.in", label: "Blog", icon: "📝", external: true }
                    ].map((item) => (
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-primary)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'var(--bg-card-hover)';
                            e.target.style.color = 'var(--text-primary)';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'var(--bg-card)';
                            e.target.style.color = 'var(--text-secondary)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.to}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-primary)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'var(--bg-card-hover)';
                            e.target.style.color = 'var(--text-primary)';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'var(--bg-card)';
                            e.target.style.color = 'var(--text-secondary)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
