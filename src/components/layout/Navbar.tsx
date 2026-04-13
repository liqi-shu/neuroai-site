import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/privacy", label: "Privacy" },
  { to: "/support", label: "Support" }
];

function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary">
        <NavLink to="/" className="brand" end>
          NeuroAI LLC
        </NavLink>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
