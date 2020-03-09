import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HaNoiStationDark from '../screens/HaNoiStationDark';
import HaNoiStationLight from '../screens/HaNoiStationLight';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Station Dark" component={HaNoiStationDark} />
            <Tab.Screen name="Station Light" component={HaNoiStationLight} />
        </Tab.Navigator>
    );
}