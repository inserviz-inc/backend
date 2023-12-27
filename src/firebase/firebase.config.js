// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCc5Dnag0HihI7la5g3uSZO1V4eD_Oo3Og",
  authDomain: "inserviz-381216.firebaseapp.com",
  projectId: "inserviz-381216",
  storageBucket: "inserviz-381216.appspot.com",
  messagingSenderId: "388707209059",
  appId: "1:388707209059:web:f49a9906ef47e899e44d56",
  measurementId: "G-291C1ZMJ1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = app;
