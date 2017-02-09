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
            <h2>Message: {this.props.message}</h2>
        );
    }
}

export default WelcomeComponent;