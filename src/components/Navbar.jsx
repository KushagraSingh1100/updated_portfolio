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
        <h1>{hover == false ? "© Code by Kushagra" : "© Kushagra Singh"}</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
