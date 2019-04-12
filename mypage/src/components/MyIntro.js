import React from 'react';
import './compCSS/MyIntro.css';
import myPic from "./images/myPic.jpg";

function MyIntro(props){
  return(
    <div className="row">
      <div className="col-sm-3">
        <img src={myPic} className="myPic img-fluid shadow" alt="Me in a shirt"></img>
      </div>
      <div className="col-sm-6" id="intro">
        <div className="introduction">
          <h1>Hello, my name is <span className="emphasized">Sage Ono</span>.</h1>
          <hr></hr>
          <p>I am currently a junior at Emory University pursuing a <span className="emphasized">joint BS in Math and Computer Science and a BA in Philosophy</span>.
           After college, I hope to build tools to create more flexible, democratic, and equitable learning and working environments.
           Aside from my career related interests, I am a scuba diver, underwater photographer, and collegiate swimmer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyIntro
