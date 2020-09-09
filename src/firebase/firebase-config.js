import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMZQiokEusup9NHNIjl5hkKGgxp4Zqqek",
    authDomain: "artuedu-react-curso.firebaseapp.com",
    databaseURL: "https://artuedu-react-curso.firebaseio.com",
    projectId: "artuedu-react-curso",
    storageBucket: "artuedu-react-curso.appspot.com",
    messagingSenderId: "967177434992",
    appId: "1:967177434992:web:b78bae5ac85021a90601b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}