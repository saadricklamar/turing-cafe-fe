import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super() 
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
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations.map(reservation => {
            return <article>
                    <h1>{reservation.name}</h1>
                    <p>{reservation.date}</p>
                    <p>{reservation.time}</p>
                    <p>Number of guests:{reservation.number}</p>
                  </article>
          })}
        </div>
      </div>
    )
  }
}

export default App;
