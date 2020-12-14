import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AuthProvider} from './auth/auth';
import Main from './Main';
import Login from './auth/Login';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/main">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
