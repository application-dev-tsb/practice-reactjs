/**
 * Created by KWL on 2/9/2017.
 */
import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.startCount
        };
    }

    componentDidMount() {
        setInterval(()=>this.increment(), this.props.delaySeconds * 1000);
    }

    render() {
        return(
            <div>Current Count: {this.state.count}</div>
        );
    }

    increment() {
        this.setState((old, props) => ({
            count: parseInt(old.count) + 1
        }));
    }
}

export default Counter;