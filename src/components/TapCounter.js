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
        this.setState(old => ({count: old.count + 1}) );
    }

    render() {

        let cheer = null;
        if (this.state.count < 10) {
            cheer = <div>Less than 10</div>
        } else {
            cheer = <div>More than 10!!!!</div>
        }

        return(
            <div>
                <button onClick={this.tap}>Tap Me</button>
                <div>Count: {this.state.count}</div>
                {cheer}
                {this.state.count>10 ? <span>true</span> : <span>false</span>}
            </div>
        );
    }
}

export default TapCounter;