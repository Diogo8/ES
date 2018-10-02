import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const accessToken = localStorage.getItem('access_token');
  console.log(accessToken);
  if (accessToken) {
    return true;
  }
  return false;
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === false ? (
        <Component {...props} />
      ) : (
        <Redirect to="/profile" />
      )
    }
  />
);
