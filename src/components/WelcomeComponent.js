/**
 * Created by KWL on 2/9/2017.
 */
import React, { Component } from 'react';

class WelcomeComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="WelcomeComponent">
                <div className="App-header">
                    <h2>Welcome {this.props.message}</h2>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;