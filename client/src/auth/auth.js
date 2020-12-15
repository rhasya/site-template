import {createContext, useContext, useState} from 'react';
import authUtils from './authUtils';

const authContext = createContext();
const useAuth = () => useContext(authContext);

function AuthValue() {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  
  const signIn = (username, password) => {
    return new Promise((resolve, reject) => {
      authUtils.signIn(username, password).then(() => {
        setUsername(username);
        localStorage.setItem('username', username);
        resolve();
      }).catch(e => {
        reject(e);
      });
    });
  };

  const signOut = () => {
    return new Promise((resolve, reject) => {
      authUtils.signOut().then(() => {
        setUsername(null);
        localStorage.removeItem('username');
        resolve();
      }).catch(e => {
        reject(e);
      })
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