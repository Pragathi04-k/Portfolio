import React from "react";
import { Link } from "react-scroll";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },

];

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "#07153b",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0,0,0,0.7)"
    }}>
      {navLinks.map(({ id, label }) => (
        <Link
          key={id}
          to={id}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          style={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
          }}
          activeStyle={{ borderBottom: "2px solid #4fc3f7" }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
