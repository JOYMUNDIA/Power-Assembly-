import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/rccg.png"; // Logo image

const Navigation: React.FC = () => {
  const [sidenavActive, setSidenavActive] = useState(false); // Manage sidenav visibility
  const [ministryHubActive, setMinistryHubActive] = useState(false); // Track Ministry Hub dropdown state
  const location = useLocation(); // For active link styling

  // Toggle the sidenav
  const toggleSidenav = () => setSidenavActive((prev) => !prev);

  // Check if a link is the active one
  const isActive = (path: string) => location.pathname === path;

  // Toggle the Ministry Hub dropdown
  const toggleMinistryHub = () => setMinistryHubActive((prev) => !prev);

  return (
    <div className="home-root">
      {/* Header Section */}
      <header className="home-header">
        <div className="logo">
          <img src={logoImg} alt="RCCG Power Assembly Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/under-construction" className={isActive("/#about") ? "active" : ""}>About Us</Link>

          {/* Ministry Hub Dropdown */}
          <div className="ministry-hub">
            <button
                className={`ministry-hub-btn ${ministryHubActive ? "active" : ""}`}
                onClick={toggleMinistryHub}
                >
                Ministry Hub <span className="caret">▼</span>
            </button>
            
            {/* Dropdown Menu */}
           
              <div className="ministry-hub-dropdown">
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Join Live Service
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Watch Recorded Services
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Upcoming Programs
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Podcasts
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Faith Articles
                </Link>
              </div>
            
          </div>

          <Link to="/testimonies" className={isActive("/testimonies") ? "active" : ""}>Testimonies</Link>
          <Link to="/under-construction" className={isActive("/#prayer") ? "active" : ""}>Prayer Requests</Link>
          <Link to="/under-construction" className={isActive("/#contact") ? "active" : ""}>Contact Us</Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleSidenav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      {/* Sidenav for small screens */}
      <div className={`home-sidenav ${sidenavActive ? "active" : ""}`}>
        <div className="logo">
          <img src={logoImg} alt="RCCG Power Assembly Logo" />
        </div>
        <nav>
          <Link to="/" onClick={toggleSidenav} className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/under-construction" onClick={toggleSidenav} className={isActive("/#about") ? "active" : ""}>About Us</Link>

          {/* Ministry Hub Dropdown in Sidenav */}
          <div className="ministry-hub">
            <button
              className={`ministry-hub-btn ${ministryHubActive ? "active" : ""}`}
              onClick={toggleMinistryHub}
            >
              Ministry Hub ▼
            </button>
            {ministryHubActive && (
              <div className="ministry-hub-dropdown">
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Join Live Service
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Watch Recorded Services
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Upcoming Programs
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Podcasts
                </Link>
                <Link to="/under-construction" className="ministry-hub-link" onClick={() => setMinistryHubActive(false)}>
                  Faith Articles
                </Link>
              </div>
            )}
          </div>

          <Link to="/testimonies" onClick={toggleSidenav} className={isActive("/testimonies") ? "active" : ""}>Testimonies</Link>
          <Link to="/under-construction" onClick={toggleSidenav} className={isActive("/#prayer") ? "active" : ""}>Prayer Requests</Link>
          <Link to="/under-construction" onClick={toggleSidenav} className={isActive("/#contact") ? "active" : ""}>Contact Us</Link>
        </nav>
      </div>

      {/* Floating bubble close button */}
      {sidenavActive && (
        <button className="sidenav-bubble-close" onClick={toggleSidenav}>×</button>
      )}
    </div>
  );
};

export default Navigation;