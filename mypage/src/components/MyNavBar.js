import React from 'react';
import './compCSS/MyNavBar.css';
import Resume from "./images/Resume.pdf";
import {Link} from 'react-router-dom'

function MyNavBar(props) {

  return (
    <nav className="navbar navbar-expand-sm">

      <li className="navbar-brand" id="myName">Sage Ono</li>

      <ul className="navbar-nav">

        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>

        <li className="nav-item">
          <Link to={Resume} className="nav-link" target='blank'>Resume</Link>
        </li>
      </ul>
    </nav>
  )

}

export default MyNavBar
