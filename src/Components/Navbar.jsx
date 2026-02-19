import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className={`navbar ${open ? "open" : ""}`} aria-label="Main navigation">
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={close}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={close}>
            Projects
          </a>
        </li>
        <li>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "")} onClick={close}>
            Blogs
          </NavLink>
        </li>
        <li>
          <a href="#pricing" onClick={close}>
            Pricing
          </a>
        </li>
<li>

      <a className="contact" href="#contact" onClick={close}>
        Contact
      </a>
</li>

      </ul>
      <button
        className="hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={close}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={close}>
              Projects
            </a>
          </li>
          <li>
            <NavLink to="/blogs" onClick={close}>
              Blogs
            </NavLink>
          </li>
          <li>
            <a href="#pricing" onClick={close}>
              Pricing
            </a>
          </li>
          <li>
            <a className="contact" href="#contact" onClick={close}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;