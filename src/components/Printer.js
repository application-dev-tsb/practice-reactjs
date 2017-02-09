/**
 * Created by KWL on 2/9/2017.
 */
import React from 'react';

class Printer extends React.Component {

    render() {
        return(
            <span>SysOut: {this.props.line}</span>
        );
    }
}

export default Printer;