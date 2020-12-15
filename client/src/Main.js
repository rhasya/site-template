import {useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Link as RouterLink, BrowserRouter as Router, 
  Route, Switch, useHistory} from 'react-router-dom';

import useAuth from './auth/auth';

const converter = {
  '/main': 0,
  '/main/menu1': 1,
  '/main/menu2': 2,
};

function Main() {
  const hist = useHistory();
  const auth = useAuth();
  console.log();
  const [selTab, setSelTab] = useState(converter[window.location.pathname] || 0);

  const signOut = () => {
    auth.signOut().then(() => {
      hist.push('/');
    });
  };
  
  const tabStyle = {
    minWidth: '72px'
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Typography variant="h5">LOGO</Typography>
          <div style={{display: 'flex'}}>
            <Tabs value={selTab} onChange={(event, newValue) => setSelTab(newValue)}>
              <Tab component={RouterLink} to="/main" label="Main" style={tabStyle}/>
              <Tab component={RouterLink} to="/main/menu1" label="Menu1" style={tabStyle}/>
              <Tab component={RouterLink} to="/main/menu2" label="Menu2" style={tabStyle}/>
            </Tabs>
            <Typography style={{width: '16px'}}></Typography>
            <Button color="inherit" onClick={signOut}>Sign Out</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/main">
            <div>TEST</div>
          </Route>
          <Route path="/main/menu1">
            <div>TEST MENU1</div>
          </Route>
          <Route path="/main/menu2">
            <div>TEST MENU2 !!</div>
          </Route>
          <Route path="*">
            <div>error</div>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Main;