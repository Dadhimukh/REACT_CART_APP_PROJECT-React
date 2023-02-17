   //latest version use imports like below
   import firebase from "firebase/compat/app";
   import "firebase/compat/firestore";

   const firebaseConfig = {
   apiKey: "AIzaSyBOeMAN1ZeCKNH12yVVdWg-hqi_Hi_MnJo",
   authDomain: "cart-2f71d.firebaseapp.com",
   projectId: "cart-2f71d",
   storageBucket: "cart-2f71d.appspot.com",
   messagingSenderId: "679078526300",
   appId: "1:679078526300:web:f0e14fdacd0a110e4e1599",
   };
   // Initialize Firebase
   //latest version initiliaze and export db like this below
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export const firestore = firebase.firestore();
