import React, { Component } from 'react';


class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: null
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addReservation(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' onChange={this.handleChange}/>
                <input type='text' name='date' onChange={this.handleChange}/>
                <input type='text' name='time' onChange={this.handleChange}/>
                <input type='text' name='number' onChange={this.handleChange}/>
                <button>Make Reservation</button>
            </form>

        )

    }
}

export default ReservationForm