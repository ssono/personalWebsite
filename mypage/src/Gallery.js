import React, {Component} from 'react';
import './Gallery.css'
import MyNavBar from "./components/MyNavBar";

class Gallery extends Component {

  render(){
    return (
      <div id="main" className="container-fluid">
        <MyNavBar />
        <h1>This is Gallery</h1>
      </div>
    );
  }
}

export default Gallery
