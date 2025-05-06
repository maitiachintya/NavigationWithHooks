// StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import DrawerNavigator from '../DrawerNavigation';
import { RootStackParamList } from '../../types'; // Adjust path if needed

const Stack = createStackNavigator<RootStackParamList>(); // Typing the Stack navigator with the param list

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer">
    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  
  );
};

export default StackNavigator;
