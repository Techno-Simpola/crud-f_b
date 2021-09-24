// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA0rzQ_NjvQqf39huguCW-fi7ey0xE2Gg",
  authDomain: "snappy-topic-322517.firebaseapp.com",
  databaseURL: "https://snappy-topic-322517-default-rtdb.firebaseio.com",
  projectId: "snappy-topic-322517",
  storageBucket: "snappy-topic-322517.appspot.com",
  messagingSenderId: "269681782324",
  appId: "1:269681782324:web:58df564485a117a3f5e461",
  measurementId: "G-N2VQDYM11M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);