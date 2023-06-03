import { NavLink } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Warwick/H.</div>
      <ul>
        <li>
          <NavLink exact to="/">
            Stories.
          </NavLink>
        </li>
        <li>
          <NavLink to="/works">Works.</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts.</NavLink>
        </li>
      </ul>
    </nav>
  );
}
