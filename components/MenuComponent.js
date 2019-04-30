import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem
                    key={index}//key property is index here. What is supplied through key extractor down in return.
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
        );
    };

    return (
            <FlatList //expects me to supply some info. it will use in order to render the list of items.
                data={props.dishes}
                renderItem={renderMenuItem}//how to render each item in the list. take parameter where we will render each item in the list.
                keyExtractor={item => item.id.toString()}//keyExtractor expect to supply a string.
                />
    );
}

export default Menu;