import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';

class Main extends Component {//created the main class component. Inside defined the constructor with the props.
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null//to be able to select a dish
    };
  }

  onDishSelect(dishId){
      this.setState({selectedDish: dishId});//setting the state, by calling this method here.
  }

  render() {
 
    return (//two items Menu and Dishdetail being returned here, and that can't be done, so I hae to inclose that in a view
        <View>
        <Menu dishes={this.state.dishes}//this.state.dishes supplied as props.
            onPress={(dishId) => this.onDishSelect(dishId)} />//how I'm passing in handling the user interactions through this parameter, that will result in a call to this function here, the dishId, this.onDishselect(dishId).
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> //it was an array, but had to return that from single element, so added [0]
        </View>
    );//removed <view style={{flex: 1}} because it was causing the view to be stretched.
  }
}
  
export default Main;