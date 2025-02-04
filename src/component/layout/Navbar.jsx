import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to close the navbar
  const closeNavbar = () => {
    setIsDropdownOpen(false);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]); // Depend on state to ensure correct behavior

  return (
    <nav className="navbar navbar-expand-lg fixed-top" ref={navbarRef}>
      <div className="container-fluid" id="nav-container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
          id="navbarNav"
          // onClick={(e) => e.stopPropagation()} // Prevents clicks inside from triggering the outside handler
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home-content"
                onClick={closeNavbar}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience-content"
                onClick={closeNavbar}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills-container"
                onClick={closeNavbar}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#project-content"
                onClick={closeNavbar}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
