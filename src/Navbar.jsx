import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => setIsOpen(!isOpen);
  const navClass = `navbar-collapse offcanvas-collapse ${isOpen ? "open" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Aku Malaysian</Link>
        <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" onClick={toggleNavBar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navClass} id="collapsibleNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Cultures</a>
              <ul className="dropdown-menu">
                <li><Link to="/ethnicity" className="dropdown-item">Ethnicity</Link></li>
                <li><Link to="/games" className="dropdown-item">Games</Link></li>
                <li><Link to="/food" className="dropdown-item">Food</Link></li>
                <li><Link to="/culture" className="dropdown-item">Culture</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;