import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';
//...rest is gathering what is passed in the privateRoute
// not to confuse with spread 
const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext()
  //here is the spread operator
  return <Route {...rest} render={() => {
    return myUser ? children : <Redirect to="/"></Redirect>
  }}></Route>;
};
export default PrivateRoute;
