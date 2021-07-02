// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGwhgVgW0aHeQXMteWp871LK8Pby6Z824",
  authDomain: "peopleconnect-c401b.firebaseapp.com",
  databaseURL: "https://peopleconnect-c401b-default-rtdb.firebaseio.com",
  projectId: "peopleconnect-c401b",
  storageBucket: "peopleconnect-c401b.appspot.com",
  messagingSenderId: "955792927516",
  appId: "1:955792927516:web:7519e34d33bd53f9aaa8d9",
  measurementId: "G-73LTXY7VSH",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
