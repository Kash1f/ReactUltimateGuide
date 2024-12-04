import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdpctt5QCA9SLUFm1c9jF4f_-0w4KzyEA",
    authDomain: "react-firebase-auth-c5820.firebaseapp.com",
    projectId: "react-firebase-auth-c5820",
    storageBucket: "react-firebase-auth-c5820.appspot.com",
    messagingSenderId: "198692334202",
    appId: "1:198692334202:web:3bd60803af2530301029c3",
    measurementId: "G-C0S7GXM85J"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;