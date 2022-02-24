import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCyHXbqTntBAkJhV8XaWbqjihBoKUC3mg0",
  authDomain: "crown-db-f45ba.firebaseapp.com",
  projectId: "crown-db-f45ba",
  storageBucket: "crown-db-f45ba.appspot.com",
  messagingSenderId: "801618967071",
  appId: "1:801618967071:web:0f5430395863939ff7332a",
  measurementId: "G-1V37EXGCS6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
