// TopTabNavigator.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTab1 from '../../screens/Home/TopTab1';
import TopTab2 from '../../screens/Home/TopTab2';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="SubSection1" component={TopTab1} />
      <TopTab.Screen name="SubSection2" component={TopTab2} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
