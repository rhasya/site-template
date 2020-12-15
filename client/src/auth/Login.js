import {useState} from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {useHistory, Redirect} from 'react-router-dom';

import '../App.css';
import useAuth from './auth';

function Login() {
  const auth = useAuth();
  const hist = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const signIn = () => {
    auth.signIn(username, password).then(() => {
      // redirect to main
      hist.push('/main');
    }).catch(e => {
      setErrMsg(e);
    });
  };

  if (auth.username) {
    return <Redirect to="/main"></Redirect>
  }

  return (
    <Card className="root">
      <CardContent>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h5">Hello</Typography>
          <TextField label="USERNAME" value={username} onChange={({target}) => setUsername(target.value)}/>
          <TextField label="PASSWORD" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
          <Typography color="error" variant="caption">{errMsg}</Typography>
        </div>
      </CardContent>
      <CardActions style={{justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" onClick={signIn}>sign in</Button>
      </CardActions>
    </Card>
  );
}

export default Login;