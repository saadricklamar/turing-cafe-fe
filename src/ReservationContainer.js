import React, { Component } from 'react';
import ReservationCard from './ReservationCard';
import './ReservationContainer.css';

const ReservationContainer = ({reservations, deleteRes}) => {
    const reservationCards = reservations.map(reservation => {
        return <ReservationCard {...reservation} key={reservation.id} deleteRes={deleteRes}/>
      })

      return (
          <div className='container'>
              {reservationCards}
          </div>
      )
}

export default ReservationContainer;