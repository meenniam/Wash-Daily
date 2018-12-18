/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {tabBarBottom,createBottomTabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './components/HomePage/HomePage'
import InfoPage from './components/InfoPage/InfoPage'
import OrderPage from './components/OrderPage/OrderPage'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <RootStack></RootStack>
    );
  }
}


const RootStack = createBottomTabNavigator(
  {
    Home: HomePage,
    Order: OrderPage,
    Me: InfoPage
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-information-circle-outline';
        } else if (routeName === 'Order') {
          iconName = 'ios-add-circle';
        }
        else if (routeName === 'Me') {
          iconName = 'ios-basketball';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
