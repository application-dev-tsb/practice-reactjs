/**
 * Created by KWL on 2/10/2017.
 */
import React from 'react';

class EnhancedListItem extends React.Component {
    
    render() {
        return(
            <div>Enhanced Item: {this.props.itemName}</div>
        );
    }
}

export default EnhancedListItem;