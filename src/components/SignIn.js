import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="column is-one-third">
      <form onSubmit={this.onSubmit}>
      <div className="field">
          <div className="control has-icons-left">
            <input 
              className="input" 
              type="text" 
              placeholder="E-posti aadress" 
              value={email} 
              onChange={event => this.setState(byPropKey('email', event.target.value))} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>    
          </div>
      </div>
      <div className="field">
          <div className="control has-icons-left">
            <input 
              className="input" 
              type="password" 
              placeholder="Salasõna" 
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))} />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>    
          </div>
      </div>
        
        <button className="button is-link" disabled={isInvalid} type="submit">
          Logi sisse
        </button>

        { error && <p>{error.message}</p> }
      </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};