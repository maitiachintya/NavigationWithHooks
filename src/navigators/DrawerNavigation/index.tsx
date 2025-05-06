import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';  // For displaying the Flaticon icons
import About from '../../screens/About/index';
import Contact from '../../screens/Contact/index';
import BottomTabNavigator from '../TabNavigation';
import { Icons } from '../../themes/Icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="HomeTabs" 
        component={BottomTabNavigator} 
        options={{
          drawerIcon: () => (
            <Image 
              source={Icons.homeIcon}  // Replace with actual Flaticon image URL
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={About}
        options={{
          drawerIcon: () => (
            <Image 
              source={Icons.aboutIcon}  // Replace with actual Flaticon image URL
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Contact" 
        component={Contact}
        options={{
          drawerIcon: () => (
            <Image 
              source={Icons.contactIcon}  // Replace with actual Flaticon image URL
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
