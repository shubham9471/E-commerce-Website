
import  firebase from 'firebase';
//import { initializeApp } from "firebase/app";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAzcpDXwGqqlfAcM0WlNSTvMyvbJ1Us_uc",
        authDomain: "mywebsite-e9319.firebaseapp.com",
        projectId: "mywebsite-e9319",
        storageBucket: "mywebsite-e9319.appspot.com",
        messagingSenderId: "411934413756",
        appId: "1:411934413756:web:cd8353cb2aaa62e157d1b9",
        measurementId: "G-MF2P962K62", 

});

const auth = firebase.auth(firebaseApp);

export {auth};