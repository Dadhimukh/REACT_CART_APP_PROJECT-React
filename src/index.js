import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOeMAN1ZeCKNH12yVVdWg-hqi_Hi_MnJo",
  authDomain: "cart-2f71d.firebaseapp.com",
  projectId: "cart-2f71d",
  storageBucket: "cart-2f71d.appspot.com",
  messagingSenderId: "679078526300",
  appId: "1:679078526300:web:f0e14fdacd0a110e4e1599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


