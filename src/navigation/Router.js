import React, {useContext, useEffect} from 'react';

import {useUserDataContext} from '@context/auth/UserDataContext';

import AppStack from '@navigation/AppStack';
import AuthStack from '@navigation/AuthStack';

const Router = () => {
  const {loggedIn, setLoggedIn} = useUserDataContext();

  useEffect(() => {
    loggedIn && setLoggedIn(false);
  }, []);

  return <>{loggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default Router;
