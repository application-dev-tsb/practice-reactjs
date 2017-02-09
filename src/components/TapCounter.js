/**
 * Created by KWL on 2/9/2017.
 */
import React from 'react';

class TapCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    tap = () => {
        console.log('count:', this.state.count);
        this.setState(old =>
            ({count: old.count + 1})
        );
    }

    render() {
        return(
            <div>
                <button onClick={this.tap}>Tap Me</button>
                <div>Count: {this.state.count}</div>
            </div>
        );
    }
}

export default TapCounter;