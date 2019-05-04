import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const ContactNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  Contact: { screen: Contact }//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
}, {
    initialRouteName: 'Contact',
    navigationOptions: {
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  });

const AboutNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  About: { screen: About }//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
}, {
    initialRouteName: 'About',
    navigationOptions: {
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  });

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
  });//set up first Navigator.
//this one will use the menu component and the Dishdetail component and set up navigation between these two components.

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
}, {
    navigationOptions: {
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
});//set up second Navigator.

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home'
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      title: 'About Us',
      drawerLabel: 'About'
    }
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu'
    }
  },
  Contact: {
    screen: ContactNavigator,
    navigationOptions: {
      title: 'Contact Us',
      drawerLabel: 'Contact'
    }
  },
}, {
  drawerBackgrounColor: '#D1C4E9'});

class Main extends Component {//created the main class component. Inside defined the constructor with the props.

  render() {
    //platform that we imported here, gives me access to specific platform on which React App is running.
    return (//two items Menu and Dishdetail being returned here, and that can't be done, so I hae to inclose that in a view
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>//it was an array, but had to return that from single element, so added [0]
      //onPress={(dishId) => this.onDishSelect(dishId)} is how I'm passing in handling the user interactions through this parameter, 
      //that will result in a call to this function here, the dishId, this.onDishselect(dishId).
    );//removed <view style={{flex: 1}} because it was causing the view to be stretched.
  }
}

export default Main;