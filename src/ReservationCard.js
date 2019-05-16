import React from 'react';
import './ReservationCard.css';


const reservationCard = ({name, date, time, number}) => {
    return (
        <article className='reservation-card'>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests:{number}</p>
        </article>

    )

}

export default reservationCard;
