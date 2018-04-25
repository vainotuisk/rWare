import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}
const UserList = ({ users }) =>
  <div>
    <h2>Kasutajad</h2>
    
<table class="table" is-bordered is-striped is-narrow is-hoverable is-fullwidth>
  <thead>
  <th>Kasutaja</th><th>E-post</th><th>Roll</th><th></th><th></th>
  </thead>
    {Object.keys(users).map(key =>
      <tr><td key={key}>{users[key].username}</td><td key={key}>{users[key].email}</td><td key={key}>{users[key].username}</td><td><i class="fas fa-pencil-alt"></i></td><td><div style={{color:'Tomato'}}><i class="far fa-times-circle"></i></div></td></tr>
    )}
  </table>  
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);