import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Alert, BackHandler} from 'react-native';
import {
  useFocusEffect,
  useNavigationState,
  useNavigation,
} from '@react-navigation/native';

import {ONBOARDING_SCREEN} from '@utils/constants/screenNames';

const useAuthBackAction = (nextScreen = '') => {
  const routesLength = useNavigationState(state => state?.routes?.length);
  const navigation = useNavigation();

  const handleExitApp = () => {
    navigation.reset({
      index: 0,
      routes: [{name: ONBOARDING_SCREEN}],
    });

    // BackHandler.exitApp();
  };
  const showAlert = () => {
    Alert.alert(
      'Hold on! You are about to exit the App',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES, EXIT APP',
          onPress: () => handleExitApp(),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        if (routesLength == 1) {
          nextScreen
            ? navigation.reset({
                index: 0,
                routes: [{name: nextScreen}],
              })
            : handleExitApp();
          return true;
        } else {
          nextScreen ? navigation.navigate(nextScreen) : navigation.goBack();
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => subscription.remove();
    }, [routesLength]),
  );

  return routesLength;
};

export default useAuthBackAction;
