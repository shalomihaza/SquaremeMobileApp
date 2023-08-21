import React, {createContext, useState, useContext} from 'react';

const UserDataContext = createContext();

//create context's provider
const UserDataContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserDataContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userInfo,
        setUserInfo,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  // if (!context) {
  //   throw new Error(
  //     'UserDataContext component must be rendered as child of auth component'
  //   );
  // }
  return context;
};

//export provider
export default UserDataContextProvider;
