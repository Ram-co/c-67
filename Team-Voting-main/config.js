import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCblBbN2sy1GpmwqFrtqQvsbYBl-q3XnfI",
    authDomain: "c-67-db578.firebaseapp.com",
    projectId: "c-67-db578",
    storageBucket: "c-67-db578.appspot.com",
    messagingSenderId: "890723265640",
    appId: "1:890723265640:web:f8db4f9a9821f64c509fdd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.database();