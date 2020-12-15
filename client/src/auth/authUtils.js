function signIn(username, password) {
  return new Promise((resolve, reject) => {
    fetch('/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      'body': `username=${username}&password=${password}`
    }).then(res => {
      if (res.ok) {
        resolve();
      }
      else {
        reject('Cannot sign in.');
      }
    });
  });
}

function signOut() {
  return new Promise((resolve, reject) => {
    fetch('/logout').then(res => {
      if (res.ok) {
        resolve();
      }
      else {
        reject('Login fail.')
      }
    })
  });
}

const authUtils = {signIn, signOut};

export default authUtils;