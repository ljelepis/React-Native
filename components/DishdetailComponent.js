import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

function RenderDish(props) {
    const dish = props.dish;
    
    if (dish != null) {
        return(//using Card to render dish.
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );//Applied style in <Text style, as an inline style here, so margin 10. Similar to CSS, but only a subset of CSS.
    }
    else {
        return(<View></View>);//return an empty view, nothing will be shown.
    }
}

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render(){
        const dishId = this.props.navigation.getParam('dishId', '');//one of the properties that will be passed into all components.
        return(
            <RenderDish dish={this.state.dishes[+dishId]} />//this.state.dishes is a JS object array. So we need to select which specific dish.
        );
    }
}

export default DishDetail;