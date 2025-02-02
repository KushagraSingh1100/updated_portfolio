import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [hover, setHover] = useState(false);
  return (
    <div className="navbar">
      <div
        className="navbar-heading"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <a href="#home">
          <h1>{hover == false ? "© Code by Kushagra" : "© Kushagra Singh"}</h1>
        </a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
