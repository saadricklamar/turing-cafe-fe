import React, { Component } from 'react';
import ReservationContainer from './ReservationContainer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    let reservationsUrl = 'http://localhost:3001/api/v1/reservations';
    fetch(reservationsUrl)
    .then(response => response.json())
    .then(results => this.setState({reservations: results}))
  }


  render() {
    const { reservations } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
