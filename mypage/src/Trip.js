import React, {Component} from 'react';
import './Trip.css';
import MyNavBar from "./components/MyNavBar";

class Trip extends Component{
  constructor() {
    super()
    this.state = {
      isLoading: true,
      trip: {},
    }
  }

  render(){
    let main

    if(!this.state.isLoading){
      main = []
      let pictures = this.state.trip.photos
      let numPics = pictures.length
      // let numPics = 11
      //loops through rows of 3
      for(let i=0; i<numPics; i+=3){
        let cols = []
        //create groups of 3 cols
        for(let j=i;j<i+3;j++){
          if(j < numPics){
            let pic = pictures[j]
            cols.push(
              <div className="col-sm-4 tripGal" key={"col_"+pic.id}>
                <a href={pic.image} target='blank'>
                  <div className="picWrap zoom">
                    <img alt={'thumbnail'} src={pic.image} className="img-fluid pic"/>
                  </div>
                </a>
              </div>
            )
          }
        }
        main.push(
          <div className='row tripRow' key={'row_'+i/3}>
            {cols}
          </div>,
          <hr key={'hr_'+i/3}/>
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
    this.setState({tripId: this.props.match.params.tripId})
    let tripId = this.props.match.params.tripId
    fetch("https://whispering-savannah-23673.herokuapp.com/trip/"+tripId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          trip: data
        })
      })
  }
}

export default Trip
