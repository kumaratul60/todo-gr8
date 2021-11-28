import firebase from "firebase";

// const firebaseConfig = {
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeupv5YvQuH47i8PL2vcesO-97OG8TR_0",
  authDomain: "todo-1121.firebaseapp.com",
  projectId: "todo-1121",
  storageBucket: "todo-1121.appspot.com",
  messagingSenderId: "377028948334",
  appId: "1:377028948334:web:de12427aab6437712e517f",
});

const db = firebaseApp.firestore();
export default db;
