import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgzS0Ya9s9WUp3VRVTrtvLmG4mvDadfm0",
    authDomain: "fencingireland.firebaseapp.com",
    databaseURL: "https://fencingireland.firebaseio.com",
    projectId: "fencingireland",
    storageBucket: "fencingireland.appspot.com",
    messagingSenderId: "11766590590"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();