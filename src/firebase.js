import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUoa4K8CvJghK0S3DBkKK0oOX_u1Z4YvQ",
    authDomain: "sign-in-d0e43.firebaseapp.com",
    projectId: "sign-in-d0e43",
    storageBucket: "sign-in-d0e43.appspot.com",
    messagingSenderId: "575518879257",
    appId: "1:575518879257:web:3e57a5b6fd376b78598488"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}