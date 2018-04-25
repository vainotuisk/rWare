import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';
const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>  
 const NavigationAuth = () =>
 <nav class="navbar is-light">
 <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
          <div class="navbar-item"><Link to={routes.RUUMID}>Ruumid</Link></div>
          <a class="navbar-item"><Link to={routes.ASJAD}>Asjad</Link></a>
          <a class="navbar-item"><Link to={routes.ARUANDED}>Aruanded</Link></a>
          <a class="navbar-item"><Link to={routes.LANDING}>Avaleht</Link></a>
          <a class="navbar-item"><Link to={routes.HOME}>Home</Link></a>
          </div>
      
      <div class="navbar-end">
      <div class="navbar-item">
      <SignOutButton />
      </div>
      </div>
      </div>
  </nav>
  const NavigationNonAuth = () =>
    <ul>
      <li><Link to={routes.SIGN_IN}>Logi sisse</Link></li>
  </ul>     
export default Navigation;