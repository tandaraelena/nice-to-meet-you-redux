import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDNm2e64CNHo24NPQNUNoLnUxEDzSb4-O0",
    authDomain: "journal-app-1919.firebaseapp.com",
    databaseURL: "https://journal-app-1919.firebaseio.com",
    projectId: "journal-app-1919",
    storageBucket: "",
    messagingSenderId: "154248389038",
    appId: "1:154248389038:web:0295e172b71a4987"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore.setting({ timestampInSnapshots: true })

  export default firebase;
  