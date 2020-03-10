/**
 * @format
 * @flow
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerHaNoiStation from './Drawer';

function AppContainer() {
    return (
      <NavigationContainer>
        <DrawerHaNoiStation />
      </NavigationContainer>
    );
  }

export default AppContainer;
