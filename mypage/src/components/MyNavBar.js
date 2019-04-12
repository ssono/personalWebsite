import React from 'react';
import './compCSS/MyNavBar.css';
import Resume from "./images/Resume.pdf";
import {Link} from 'react-router-dom'

function MyNavBar(props) {

  return (
    <nav className="navbar navbar-expand-sm">

      <li className="navbar-brand" id="myName">Sage Ono</li>

      <ul className="navbar-nav">
        <div className="row">
          <div className="col-4">
            <li className="nav-item">
              <Link to="/" className="nav-link home">Home</Link>
            </li>
          </div>

          <div className="col-4">
            <li className="nav-item">
              <Link to="/gallery" className="nav-link gallery">Gallery</Link>
            </li>
          </div>

          <div className="col-4">
            <li className="nav-item">
              <Link to={Resume} className="nav-link resume" target='blank'>Resume</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  )

}

export default MyNavBar
