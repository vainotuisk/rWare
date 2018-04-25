import { db } from './fire';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetRuums = () =>
  db.ref('ruumid').once('value');

export const onceGetAsjad = () =>
  db.ref('asjad').once('value');  