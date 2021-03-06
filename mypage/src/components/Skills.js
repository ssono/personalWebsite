import React from 'react';
import './compCSS/Skills.css';

function Skills(props) {

  return(
    <div className="row row-eq-height" id="skillsWrapper">
      <div className="col-lg-4">
        <div className="skillCol h-100">
          <h2>Relevant Courses</h2>
          <ul>
            <li>Data Structures and Algorithms</li>
            <li>Artificial Intelligence</li>
            <li>Discrete Structures</li>
            <li>Numerical Analysis</li>
            <li>Theory of Computing</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="skillCol h-100">
        <h2>Languages</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>MATLAB</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="skillCol h-100">
          <h2>Technologies</h2>
          <ul>
            <li>React.js</li>
            <li>Django</li>
            <li>Bootstrap4</li>
            <li>Heroku</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Skills
