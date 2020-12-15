import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AuthProvider} from './auth/auth';
import PrivateRoute from './auth/PrivateRoute';
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
          <PrivateRoute path="/main">
            <Main/>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
