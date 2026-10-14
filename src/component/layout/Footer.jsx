function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/imran693",
      icon: "💼",
      label: "Connect on LinkedIn",
      color: "#0077B5"
    },
    {
      name: "GitHub", 
      url: "https://github.com/imran6932",
      icon: "🔗",
      label: "View GitHub Profile",
      color: "#333"
    },
    {
      name: "Email",
      url: "mailto:imransxcr53@gmail.com",
      icon: "📧",
      label: "Send Email",
      color: "#EA4335"
    },
    {
      name: "Blog",
      url: "https://blog.imranansari.in",
      icon: "📝",
      label: "Read Blog",
      color: "#FF6B35"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home-content" },
    { name: "Experience", href: "#experience-content" },
    { name: "Skills", href: "#skills-container" },
    { name: "Projects", href: "#project-content" }
  ];

  return (
    <footer className="footer-enhanced">
      <div className="footer-background">
        <div className="footer-stars"></div>
        <div className="footer-gradient"></div>
      </div>
      
      <div className="container">
        <div className="footer-content-enhanced">
          <div className="row w-100">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-brand">
                <h3 className="footer-brand-name">
                  <span className="gradient-text">Imran Ansari</span>
                </h3>
                <p className="footer-tagline">
                  Full Stack Developer & Tech Enthusiast
                </p>
                <p className="footer-description">
                  Passionate about creating innovative solutions with Django, React, 
                  and modern web technologies. Let's build something amazing together!
                </p>
                <div className="footer-location">
                  <span className="location-icon">📍</span>
                  <span>Jamshedpur, Jharkhand, India</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <h4 className="footer-section-title">Quick Links</h4>
                <ul className="footer-links-list">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <h4 className="footer-section-title">Technologies</h4>
                <div className="footer-tech-tags">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">DRF</span>
                  <span className="tech-tag">Celery</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Postman</span>
                  <span className="tech-tag">Nginx</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">GenAI</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">FAISS</span>
                  <span className="tech-tag">RAG</span>
                  <span className="tech-tag">Embeddings</span>
                </div>
              </div>
                </div>
            
            {/* Connect Section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h4 className="footer-section-title">Let's Connect</h4>
                {/* <p className="footer-connect-text">
                  Ready to discuss your next project? Reach out!
                </p> */}
                <div className="footer-social-links">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className="footer-social-link"
                      title={link.label}
                    >
                      <span className="social-icon">{link.icon}</span>
                      <span className="social-name">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="row w-100 justify-content-center">
              <div className="col-12 text-center">
                <p className="footer-copyright">
                  &copy; {currentYear} Imran Ansari. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
