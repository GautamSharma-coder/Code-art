
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDbwE7hFNe4eqDIOllJL99QUyHCxgzpS-o",
  authDomain: "datacoll-36cec.firebaseapp.com",
  databaseURL: "https://datacoll-36cec-default-rtdb.firebaseio.com",
  projectId: "datacoll-36cec",
  storageBucket: "datacoll-36cec.appspot.com",
  messagingSenderId: "1016604814091",
  appId: "1:1016604814091:web:413f4f753259580060d00e"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };






