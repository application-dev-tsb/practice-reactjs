/**
 * Created by KWL on 2/10/2017.
 */
import React from 'react';
import EnhancedListItem from './EnhancedListItem';

class EnhancedList extends React.Component {

    render() {
        const names = ['Item A', 'Item 2', 'Item 323'];
        const listItems = names.map((itemName) => <EnhancedListItem key={itemName} itemName={itemName}/>);

        return(
            <div>
                <div>Here Are My Items:</div>
                {listItems}
            </div>
        );
    }
}

export default EnhancedList;