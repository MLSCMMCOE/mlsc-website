import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg${isSticky ? ' sticky' : ''}`}>
      <div className="container-fluid">
        <HashLink className="navbar-brand header-font-700" to={"/"}>
          <span className="color-accent-blue">MLSC</span> MMCOE
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink
                className="nav-link body-font-500"
                aria-current="page"
                to="/"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#about">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link body-font-500" to="#team-section">
                Team
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link body-font-500" to="#events-section">
                Events
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link body-font-500" to="#gallery-section">
                Gallery
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link body-font-500"
                to="#testimonials-section"
              >
                Testimonials
              </HashLink>
            </li>
            <HashLink to={"/contact"} className="nav-btn body-font-500 bg-color-primary-blue
                color-white">
              <li className="nav-item">
                Contact Us
              </li>
            </HashLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
