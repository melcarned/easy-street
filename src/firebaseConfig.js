import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqR2sb3Sv6fGNh6h9vcK97sCRERCf6sKs",
  authDomain: "easy-street-5da22.firebaseapp.com",
  databaseURL: "https://easy-street-5da22.firebaseio.com",
  projectId: "easy-street-5da22",
  storageBucket: "easy-street-5da22.appspot.com",
  messagingSenderId: "976712144439",
  appId: "1:976712144439:web:11dae76b5c34fbcd"
};

firebase.initializeApp(firebaseConfig);
export default firebase;