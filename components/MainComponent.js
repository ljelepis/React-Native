import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  Menu: { screen: Menu },//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
  DishDetail: { screen: DishDetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);//set up first Navigator.
//this one will use the menu component and the Dishdetail component and set up navigation between these two components.

class Main extends Component {//created the main class component. Inside defined the constructor with the props.

  render() {
 //platform that we imported here, gives me access to specific platform on which React App is running.
    return (//two items Menu and Dishdetail being returned here, and that can't be done, so I hae to inclose that in a view
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MenuNavigator />
        </View>//it was an array, but had to return that from single element, so added [0]
        //onPress={(dishId) => this.onDishSelect(dishId)} is how I'm passing in handling the user interactions through this parameter, 
        //that will result in a call to this function here, the dishId, this.onDishselect(dishId).
    );//removed <view style={{flex: 1}} because it was causing the view to be stretched.
  }
}
  
export default Main;