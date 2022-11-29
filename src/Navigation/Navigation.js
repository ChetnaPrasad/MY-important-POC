// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../Screens/Firstpage';
import LoginPage from '../Screens/LoginPage';
import LoginSecond from '../Screens/Login/LoginSecond';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {/* <Stack.Screen name="Home" component={FirstPage} /> */}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={LoginSecond} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;