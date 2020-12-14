function signIn(username, password, cb) {
  fetch('/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    'body': `username=${username}&password=${password}`
  }).then(res => {
    if (res.ok) {
      cb();
    }
    else {
      console.error(res.status, res.statusText);
    }
  });
}

function signOut(cb) {
  fetch('/logout').then(res => {
    if (res.ok) {
      cb();
    }
    else {
      console.error(res.status, res.statusText);
    }
  });
}

const authUtils = {signIn, signOut};

export default authUtils;