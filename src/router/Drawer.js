import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import BottomTab from './BottomTab';
import HaNoiTrainStreet from '@screens/HaNoiTrainStreet';

const Drawer = createDrawerNavigator();

export default function DrawerHaNoiStation() {
  return (
      <Drawer.Navigator initialRouteName="BottomTab">
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="HaNoiTrainStreet" component={HaNoiTrainStreet} />
      </Drawer.Navigator>
  );
}