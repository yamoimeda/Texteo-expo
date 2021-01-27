import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1Z7I5IkgTuHuYVi55YYHLwWpBhRrqWVY",
  authDomain: "nombre-animal-cosa.firebaseapp.com",
  databaseURL: "https://nombre-animal-cosa.firebaseio.com",
  projectId: "nombre-animal-cosa",
  storageBucket: "nombre-animal-cosa.appspot.com",
  messagingSenderId: "823219983234",
  appId: "1:823219983234:web:41d35cdc40a1b39c6b359b"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };