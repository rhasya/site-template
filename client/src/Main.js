import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link, useHistory} from 'react-router-dom';

import useAuth from './auth/auth';

function Main() {
  const hist = useHistory();
  const auth = useAuth();

  const signOut = () => {
    auth.signOut(() => {
      hist.push('/');
    })
  };

  return (
    <div className="main">
      <Typography variant="h5">This is main page</Typography>
      <Button variant="contained" onClick={signOut}>Sign Out</Button>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Main;