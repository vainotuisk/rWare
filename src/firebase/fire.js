import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBCmCIIxZ7pVEdQWvdM8WxmQv5LPb8yZak",
    authDomain: "scorching-inferno-1325.firebaseapp.com",
    databaseURL: "https://scorching-inferno-1325.firebaseio.com",
    projectId: "scorching-inferno-1325",
    storageBucket: "scorching-inferno-1325.appspot.com",
    messagingSenderId: "333374404394"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
export const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();
const auth = firebase.auth();
export {
 db,
 auth,
};
