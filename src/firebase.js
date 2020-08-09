import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDV4R1_DOpSgxKmTS_DeeY6-z8Rm3SJzGA",
  authDomain: "instagram-clone-react-99570.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-99570.firebaseio.com",
  projectId: "instagram-clone-react-99570",
  storageBucket: "instagram-clone-react-99570.appspot.com",
  messagingSenderId: "991871892882",
  appId: "1:991871892882:web:148eb096449ae76729554b",
  measurementId: "G-WHG482T8NM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
