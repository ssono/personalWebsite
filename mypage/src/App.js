import React, { Component } from 'react';
import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyIntro from "./components/MyIntro"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"

class App extends Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <MyNavBar />
        <MyIntro />
        <h1 className="sectionTitles">Knowledge and Skills</h1>
        <hr/>
        <Skills />
        <h1 className="sectionTitles">FAQ</h1>
        <hr/>
        <AboutMe />
      </div>
    );
  }
}

export default App;
