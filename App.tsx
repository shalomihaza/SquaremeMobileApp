import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/navigation/Router';
import UserDataContextProvider from './src/context/auth/UserDataContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <UserDataContextProvider>
          <Router />
        </UserDataContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
