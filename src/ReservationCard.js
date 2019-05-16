import React from 'react';
import './ReservationCard.css';


const reservationCard = ({name, date, time, number, id, deleteRes}) => {
    return (
        <article className='reservation-card'>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests:{number}</p>
            <button onClick={() => deleteRes(id)}>Delete Reservation</button>
        </article>

    )

}

export default reservationCard;
