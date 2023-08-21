import React, {useContext, useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '@screens/auth/Onboarding';
import SignUp from '@screens/auth/SignUp';
import VerifyPhoneNumber from '@screens/auth/VerifyPhoneNumber';
import SetSecurityPin from '@screens/auth/SetSecurityPin';
import ConfirmSetSecurityPin from '@screens/auth/ConfirmSetSecurityPin';
import AuthActionSuccessful from '@screens/auth/AuthActionSuccessful';

import {
  ONBOARDING_SCREEN,
  SET_SEURITY_PIN_SCREEN,
  CONFIRM_SET_SECURITY_PIN_SCREEN,
  AUTH_ACTION_SUCCESSFUL_SCREEN,
  SIGN_UP_SCREEN,
  VERIFY_PHONE_NUMBER_SCREEN,
} from '@utils/constants/screenNames';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ONBOARDING_SCREEN}>
      <Stack.Screen name={ONBOARDING_SCREEN} component={Onboarding} />

      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={SET_SEURITY_PIN_SCREEN} component={SetSecurityPin} />
      <Stack.Screen
        name={CONFIRM_SET_SECURITY_PIN_SCREEN}
        component={ConfirmSetSecurityPin}
      />
      <Stack.Screen
        name={VERIFY_PHONE_NUMBER_SCREEN}
        component={VerifyPhoneNumber}
      />

      <Stack.Screen
        name={AUTH_ACTION_SUCCESSFUL_SCREEN}
        component={AuthActionSuccessful}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
