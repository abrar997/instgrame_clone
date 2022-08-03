import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAQtH15spsm14CpFFh-0bTOS-Nb4LTbH0o",
  authDomain: "insta-clome.firebaseapp.com",
  projectId: "insta-clome",
  storageBucket: "insta-clome.appspot.com",
  messagingSenderId: "1004051783687",
  appId: "1:1004051783687:web:deef84a30fb8b711d80aa2",
  measurementId: "G-S9Y8V6JLNC",
};
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {  auth, storage };
