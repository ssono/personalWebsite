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
    let main

    if(!this.state.isLoading){
      main = []
      let numTrips = this.state.trips.length
      // numTrips = 11
      //loops through rows of 3
      for(let i=0; i<numTrips; i+=3){
        let cols = []
        //create groups of 3 cols
        for(let j=i;j<i+3;j++){
          if(j < numTrips){
            let trip = this.state.trips[j]
            let tripName = trip.name
            tripName = tripName.split('_').join(' ')
            let tripPic = trip.photos[0].image
            cols.push(
              <div className="col-sm-4 tripGal">
                <div className="tripWrap shadow">
                  <img alt={tripName + '_thumbnail'} src={tripPic} className="img-fluid tripPic"/>
                  <h4 className='tripName'>{tripName}</h4>
                </div>
              </div>
            )
          }
        }
        main.push(
          <div className='row tripRow'>
            {cols}
          </div>,
          <hr/>
        )
      }
    } else {
      main = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    return (
      <div id="main" className="container-fluid">
        <MyNavBar />
        {main}
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
        console.log(this.state.trips[0].photos[0].image)
      })
  }
}

export default Gallery
