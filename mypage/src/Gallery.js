import React, {Component} from 'react';
import './Gallery.css'
import MyNavBar from "./components/MyNavBar";


class Gallery extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      trips: []
    }
  }

  render(){
    return (
      <div id="main" className="container-fluid">
        <MyNavBar />
        {!this.state.isLoading ?
           <img alt="first pic" src={this.state.trips[0].photos[0]}/>:
           <h2>Loading...</h2>}
      </div>
    )
  }

  componentDidMount() {
    // this.setState({loading: true})
    fetch("https://whispering-savannah-23673.herokuapp.com/trip/")
      .then(response => response.json())
      .then(data => {
        console.log(data[0].photos[0])
        this.setState({
          isLoading: false,
          trips: data
        })
      })
  }
}

export default Gallery
