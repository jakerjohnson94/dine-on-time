import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Timer extends Component {

    // Component should recieve a time in minutes
    state = {
        seconds: Number( this.props.minutes ) * 60,
        isRunning: false,
    }

    // If it's counting down then count down and run next at 00:00 if provided.
    countDown = () => {
        if ( this.state.isRunning && this.state.seconds > 0 ) {
            this.setState( { seconds: this.state.seconds - 1 } );
        } else if ( this.state.seconds === 0 ) {
            if( this.props.next ) this.props.next();
        }
    }

    // Run countdown every seconds
    componentDidMount = () => {
        this.setState( { timeOutId: setInterval( () => { this.countDown() }, 1000) } );
    }

    render() {
        return (
            <div id='timer'>
                <div id='timePiece'>
                    <span>
                        <Typography variant='display4'> { Math.floor( this.state.seconds / 60 ) } : { ( '0' + ( this.state.seconds % 60 ) ).slice( -2 ) } </Typography>
                    </span>
                </div>
                <Button
                    varient='contained'
                    color={ this.state.isRunning ? 'secondary' : 'primary' }
                    onClick={ () => { this.setState( { isRunning: !this.state.isRunning } ) } }
                    id='timerSubmit'> { this.state.isRunning ? 'Pause' : 'Start' } </Button>
            </div>
        )
    }    
}

