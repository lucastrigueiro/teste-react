import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Home from './../pages/home/Home';
import Login from './../pages/login/Login';
import NotFound from './../pages/notFound/NotFound';
import ExamplePage from './../pages/examplePage/ExamplePage';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import '../assets/styles/styles.scss';


const Routes = () => (
  <Router>
    <Switch>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/example/:exParam" component={ExamplePage} />
      <Route exact path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route component={Login} />
    </Switch>
  </Router>
);
export default Routes;
