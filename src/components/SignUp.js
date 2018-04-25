import React, { Component } from 'react';
import { Link,
    withRouter,
 } from 'react-router-dom';
 import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <p class="subtitle is-4">Tee konto </p>
    <SignUpForm history={history} />
  </div>
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;
      const {
        history,
      } = this.props;
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
  
      event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <form onSubmit={this.onSubmit}>
      <div className="column is-one-third">
      <div className="field">
      <label className="label">Nimi</label>
      <div className="control">
<input    className="input"
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Eesnimi Perenimi"
        /></div></div>
        <div className="field">
        <label className="label">E-post</label>
        <input
          className="input"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="e-posti aadress"
        />
        </div>
        <div className="field">
        <label className="label">Salasõna</label>
        <input
          className="input"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="salasõna"
        />
        <input
          className="input"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="korda salasõna"
        />
        </div>
        <button className="button is-link" disabled={isInvalid} type="submit">
          Salvesta
        </button>

        { error && <p>{error.message}</p> }
        </div>
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Pole kontot?
    {' '}
    <Link to={routes.SIGN_UP}>Loo konto</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};