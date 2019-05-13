import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
//will turn functional component "function Menu(props)" into a classical component, because we want to store our state here.
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };

    render() {//made return into a render function because we changed top to a class function.
        
        const renderMenuItem = ({item, index}) => {//moved renderMenuItem into render, bc it's gonna be used by the FlatList here.
            return (
                    <Tile
                        key={index}//key property is index here. What is supplied through key extractor down in return.
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('DishDetail', { dishId: item.id })}
                        imageSrc={{ uri: baseUrl + item.image }}
                      />
            );
        }
        
        const { navigate } = this.props.navigation;

        if (this.props.dishes.isLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            );
        }
        else {
            return(//because we are returning this from inside the render function.
                <FlatList //expects me to supply some info. it will use in order to render the list of items.
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}//how to render each item in the list. take parameter where we will render each item in the list.
                    keyExtractor={item => item.id.toString()}//keyExtractor expect to supply a string.
                    />
            );
        }
    }
}

export default connect(mapStateToProps)(Menu);