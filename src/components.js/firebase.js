import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig ={
    apiKey: "AIzaSyCqN5a7zlIiYqyW5cZTpXMk1q7x3G6fvhg",
    authDomain: "test-1183b.firebaseapp.com",
    databaseURL: "https://test-1183b.firebaseio.com",
    projectId: "test-1183b",
    storageBucket: "test-1183b.appspot.com",
    messagingSenderId: "735165065316",
    appId: "1:735165065316:web:4d18bc7a3ea107723e5771",
    measurementId: "G-82NSJ5K62S"
}

firebase.initializeApp(firebaseConfig)
export const auth =firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const storageRef = firebase.storage().ref();
export default firebase;