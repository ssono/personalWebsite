import React from 'react';
import './compCSS/MyNavBar.css';
import Resume from "./images/Resume.pdf";

function MyNavBar(props) {

  return (
    <nav className="navbar navbar-expand-sm">

      <a className="navbar-brand" id="myName">Sage Ono</a>

      <ul className="navbar-nav">

        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>

        <li className="nav-item">
          <a href="/gallery" className="nav-link">Gallery</a>
        </li>

        <li className="nav-item">
          <a href={Resume} className="nav-link" target='blank'>Resume</a>
        </li>
      </ul>
    </nav>
  )

}

export default MyNavBar
