import {Route, Redirect} from 'react-router-dom';

import useAuth from './auth';

function PrivateRoute({children, ...rest}) {
  const auth = useAuth();
  const render = ({location}) =>
    auth.username ? (children) :
      (<Redirect to={{pathname: '/', state: {from: location}}}/>)
  ;

  return (
    <Route {...rest} render={render}/>
  )
}

export default PrivateRoute;