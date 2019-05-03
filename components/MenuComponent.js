import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
//will turn functional component "function Menu(props)" into a classical component, because we want to store our state here.

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {//made return into a render function because we changed top to a class function.
        
        const renderMenuItem = ({item, index}) => {//moved renderMenuItem into render, bc it's gonna be used by the FlatList here.
            return (
                    <ListItem
                        key={index}//key property is index here. What is supplied through key extractor down in return.
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        onPress={() => navigate('DishDetail', { dishId: item.id })}
                        leftAvatar={{ source: require('./images/uthappizza.png')}}
                      />
            );
        }
        
        const { navigate } = this.props.navigation;

        return(//because we are returning this from inside the render function.
            <FlatList //expects me to supply some info. it will use in order to render the list of items.
                data={this.state.dishes}
                renderItem={renderMenuItem}//how to render each item in the list. take parameter where we will render each item in the list.
                keyExtractor={item => item.id.toString()}//keyExtractor expect to supply a string.
                />
        );
    }
}

export default Menu;