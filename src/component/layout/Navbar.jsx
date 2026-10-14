import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const closeNavbar = () => setIsDropdownOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        closeNavbar();
      }
    };
    if (isDropdownOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isDropdownOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    closeNavbar();
    
    // If we're already on the home page, just scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { sectionId: "home-content", label: "Home", icon: "🏠" },
    { sectionId: "experience-content", label: "Experience", icon: "💼" },
    { sectionId: "skills-container", label: "Skills", icon: "⚡" },
    { sectionId: "project-content", label: "Projects", icon: "🚀" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "nav-scrolled" : ""}`}
      ref={navbarRef}
    >
      <div className="container d-flex align-items-center justify-content-between py-2">
        <button 
          className="navbar-brand fw-bold mb-0 p-0 bg-transparent border-0" 
          onClick={() => handleNavigation('home-content')}
          style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}
        >
          Imran Ansari
        </button>

        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="Toggle navigation"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '1.5rem'
          }}
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            background: 'currentColor',
            margin: '5px 0',
            transition: 'all 0.3s',
            transform: isDropdownOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            background: 'currentColor',
            margin: '5px 0',
            transition: 'all 0.3s',
            opacity: isDropdownOpen ? '0' : '1'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            background: 'currentColor',
            margin: '5px 0',
            transition: 'all 0.3s',
            transform: isDropdownOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isDropdownOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav align-items-center gap-1 ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.sectionId}>
                <button
                  className="nav-link d-flex align-items-center gap-2 bg-transparent border-0"
                  onClick={() => handleNavigation(item.sectionId)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="d-none d-lg-inline" style={{fontSize: '1rem'}}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2"
                href="https://blog.imranansari.in"
                onClick={closeNavbar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="d-none d-lg-inline" style={{fontSize: '1rem'}}>
                  📝
                </span>
                <span>Blog</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </li>
            <li className="nav-item ms-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
