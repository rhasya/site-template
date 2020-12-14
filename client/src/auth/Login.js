import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import {useHistory} from 'react-router-dom';

import '../App.css';
import useAuth from './auth';

function Login() {
  const auth = useAuth();
  const hist = useHistory();

  const signIn = () => {
    auth.signIn('admin', 'admin', () => {
      // redirect to main
      hist.push('/main');
    });
  };

  return (
    <Card className="root">
      <CardContent>
        <Typography variant="h5">Hello</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={signIn}>sign in</Button>
      </CardActions>
    </Card>
  );
}

export default Login;