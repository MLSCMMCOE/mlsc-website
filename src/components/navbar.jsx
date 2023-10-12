import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand header-font-700" to={"/"}>
          <span className="color-accent-blue">MLSC</span> MMCOE
        </Link>
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
              <Link
                className="nav-link body-font-500"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link body-font-500" href="/#team-section">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link body-font-500" href="/#events-section">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link body-font-500" href="/#gallery-section">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link body-font-500"
                href="/#testimonials-section"
              >
                Testimonials
              </a>
            </li>
            <Link to={"/contact"} className="nav-btn body-font-500 bg-color-primary-blue
                color-white">
              <li className="nav-item">
                 Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
