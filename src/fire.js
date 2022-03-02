import {initializeApp} from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import * as firebase from 'firebase/app'
// import 'firebase/database';
import { } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBmkcv6O_ydh__A5lN2sz5DcswJ3kUu-9M",
    authDomain: "chat-app-demo-1279e.firebaseapp.com",
    databaseURL: "https://chat-app-demo-1279e-default-rtdb.firebaseio.com",
    projectId: "chat-app-demo-1279e",
    storageBucket: "chat-app-demo-1279e.appspot.com",
    messagingSenderId: "1072175677654",
    appId: "1:1072175677654:web:b3f472ddd9bcbc6fa68977",
    measurementId: "G-WDX5FWZGD9"
};

const fire = initializeApp(firebaseConfig);

export default fire