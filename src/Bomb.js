import React, { Component } from 'react';

export class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render() {
        const message = this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
        
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default Bomb;
