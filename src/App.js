import React, { Component } from 'react';
import ReservationContainer from './ReservationContainer';
import ReservationForm from './ReservationForm';
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

  addReservation = (reservation) => {
    const newReservation = {...reservation, id:Date.now()};
    const reservations = [...this.state.reservations, newReservation];
    this.setState({reservations})
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number
      })
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
  }

    deleteRes = (id) => {
      const reservations = this.state.reservations.filter(reservation => reservation.id !== id)
      this.setState({reservations})
    }


  render() {
    const { reservations } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm reservations={reservations} addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations} deleteRes={this.deleteRes}/>
        </div>
      </div>
    )
  }
}

export default App;
