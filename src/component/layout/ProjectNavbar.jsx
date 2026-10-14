import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function ProjectNavbar() {
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
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]); // Depend on state to ensure correct behavior

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" ref={navbarRef}>
        <div className="container-fluid" id="nav-container">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ProjectNavbar;
