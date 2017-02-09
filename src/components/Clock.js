/**
 * Created by KWL on 2/9/2017.
 */
import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //initialize state in constructor
            date: new Date()
        };
    }

    //alter state
    tick() {
        this.setState({
            date: new Date()
        });
    }

    //lifecycle hook
    componentDidMount() {
        setInterval(()=>this.tick(), 1000);
    }

    render() {
        return(
            <div>The time is {this.state.date.toLocaleString()}.</div>
        );
    }
}

export default Clock;