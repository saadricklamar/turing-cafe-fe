import React, { Component } from 'react';
import ReservationCard from './ReservationCard';

const ReservationContainer = ({reservations}) => {
    const reservationCards = reservations.map(reservation => {
        return <ReservationCard {...reservation} key={reservation.id}/>
      })

      return (
          <div>
              {reservationCards}
          </div>
      )
}

export default ReservationContainer;