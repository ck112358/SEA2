import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If Firebase was already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
