import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';
import HaNoiTrainStreet from '../screens/HaNoiTrainStreet';

const Drawer = createDrawerNavigator();

export default function DrawerHaNoiStation() {
  return (
      <Drawer.Navigator initialRouteName="BottomTab">
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="HaNoiTrainStreet" component={HaNoiTrainStreet} />
      </Drawer.Navigator>
  );
}