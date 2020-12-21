import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './screens/splash';
import Login from './screens/login';
import Reg from './screens/reg';
import Home from './screens/home';
import Details from './screens/details';
import Donate from './screens/donate';
import Thanks from './screens/thanks';
import Settings from './screens/settings';
import Add from './screens/add';
import Success from './screens/success';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Reg" 
        component={Reg} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Donate" 
        component={Donate} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Thanks" 
        component={Thanks} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Add" 
        component={Add} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Success" 
        component={Success} 
        options={{ headerShown: false}} 
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}