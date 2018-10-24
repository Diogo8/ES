import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import Feed from 'pages/Feed';
import BookmarkSearch from 'pages/BookmarkSearch';
import EditProfile from 'pages/EditProfile';
import { PublicRoute, PrivateRoute } from 'router/routes';

const RouterApp = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/bookmarks" component={BookmarkSearch} />
      <PrivateRoute path="/edit" component={EditProfile} />
    </Switch>
  </Router>
);

export default RouterApp;
