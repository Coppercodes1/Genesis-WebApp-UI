import React, { Component } from 'react';
import Location from './Location/Location';


const locations = [
    { name: 'Verna' },
    { name: 'Kudal' },
    { name: 'Kundaim' },
    { name: 'Panjim' },
    { name: 'Karaswada' },
    { name: 'Ponda' },
]

export default class Locations extends Component {
    state = {
        value: 0,
    };

    onChange = event => {
        console.log('radio checked', event.target.value);
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <Location
                    locations={locations}
                    value={this.state.value}
                    onChange={event => this.onChange(event)}
                />
            </div>
        );
    }
}