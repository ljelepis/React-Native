import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const ContactNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  Contact: { screen: Contact }//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
}, {
    initialRouteName: 'Contact',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerLeft: <Icon name='menu' size={24} //HeaderLeft option will add whatever we supply here to the left of the header in the status bar.
        color='white'
        onPress={ () => navigation.toggleDrawer() }//.toggleDrawer() method invoked, it'll toggle the drawer.
        />
    })
  });

const AboutNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  About: { screen: About }//this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
}, {
    initialRouteName: 'About',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        headerLeft: <Icon name='menu' size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
          />
      }
    })
  });

const MenuNavigator = createStackNavigator({//created a new component MenuNavigator component, which is a stackNavigator component.
  Menu: { screen: Menu,
   navigationOptions: ({ navigation }) => ({
     headerLeft: <Icon name='menu' size={24} //HeaderLeft option will add whatever we supply here to the left of the header in the status bar.
        color='white'
        onPress={() => navigation.toggleDrawer()}//.toggleDrawer() method invoked, it'll toggle the drawer.
        />
    }) 
  }, //built an arrow function, and instead we will specifiy naviagation options. this is a JS object here, with the parameter screen, which specifies the component for which you navigate when you make this choice here.
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
    navigationOptions: ({ navigation }) => ({
      headerStyle: {//where we specify the color for the header for our stackNavigator.
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
        />
    })
});//set up second Navigator.

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image source={require('./images/logo.png')}
            style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
);//Inside the SafeAreaView, defining view at the top, drawer will now have header.

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='home'
          type='font-awesome'
          size={24}
          color={tintColor}//how you add a drawer icon to the Home.
          />
      )
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      title: 'About Us',
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='info-circle'
          type='font-awesome'
          size={24}
          color={tintColor}
          />
      )
    }
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='list'
          type='font-awesome'
          size={24}
          color={tintColor}
          />
      )
    }
  },
  Contact: {
    screen: ContactNavigator,
    navigationOptions: {
      title: 'Contact Us',
      drawerLabel: 'Contact Us',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='address-card'
          type='font-awesome'
          size={22}
          color={tintColor}
          />
      )
    }
  },
}, {
  drawerBackgrounColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;