import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import AsjadPage from './Asjad';
import RuumidPage from './Ruumid';
import HomePage from './Home';
import LandingPage from './Landing';
import AruandedPage from './Aruanded';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import AdminPage from './Admin';
import * as routes from '../constants/routes';
import PasswordForgetPage from './PasswordForget';
// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
//  https://github.com/rwieruch/learn-react-firebase-book/blob/master/manuscript/chapter2.md
import withAuthentication from './withAuthentication'; 

const App = () =>
  <Router>
    <div>
    <Navigation />
    

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.ASJAD}
        component={() => <AsjadPage />}
      />
      <Route
        exact path={routes.RUUMID}
        component={() => <RuumidPage />}
      />
      <Route
        exact path={routes.ARUANDED}
        component={() => <AruandedPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
    </div>
  </Router>

export default withAuthentication(App);
