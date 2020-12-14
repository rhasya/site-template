import {createContext, useContext, useState} from 'react';
import authUtils from './authUtils';

const authContext = createContext();
const useAuth = () => useContext(authContext);

function AuthValue() {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  
  const signIn = (username, password, cb) => {
    authUtils.signIn(username, password, () => {
      setUsername(username);
      localStorage.setItem('username', username);
      if (cb) cb();
    });
  };

  const signOut = (cb) => {
    authUtils.signOut(() => {
      setUsername(null);
      localStorage.removeItem('username');
      if (cb) cb();
    });
  }

  return {
    username,
    signIn,
    signOut
  };
}

function AuthProvider({children}) {
  const auth = AuthValue();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export {useAuth as default, AuthProvider};