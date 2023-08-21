import 'react-native-gesture-handler';
import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@screens/app/Home';
import WalletBalance from '@screens/app/WalletBalance';
import Profile from '@screens/app/Profile';

import {
  HOME_SCREEN,
  WALLET_BALANCE_SCREEN,
  PROFILE_SCREEN,
} from '@utils/constants/screenNames';

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={WALLET_BALANCE_SCREEN} component={WalletBalance} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
}

export default AppStack;
