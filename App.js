//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options
//For React Navigation 2.+ import following
//import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import PegadinhaScreen from './pages/pegadinha';
import RonaldinhoScreen from './pages/ronaldinho';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2422a8',
      },
      headerTintColor: '#FFFFFF',
      title: 'Início',
      //Header title
    },
  }
);


const RonaldinhoStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    ronaldinho: { screen: RonaldinhoScreen },
    Details: { screen: DetailsScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2422a8',
      },
      headerTintColor: '#FFFFFF',
      title: 'QR Code',
      //Header title
    },
  }
);


const App = createBottomTabNavigator(
  {
    Inicio: { screen: HomeStack },
    QRCode: { screen: RonaldinhoStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Inicio') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'QRCode') {
          iconName = `ios-flame${focused ? '' : ''}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2422a8',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;

//For React Navigation 3.+
export default createAppContainer(App);