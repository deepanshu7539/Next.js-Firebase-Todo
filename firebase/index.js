import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9nPmiVTxM64awjIH3h6FRvLx9sDaXbTk",
  authDomain: "todo-app-a8476.firebaseapp.com",
  projectId: "todo-app-a8476",
  storageBucket: "todo-app-a8476.appspot.com",
  messagingSenderId: "427655159075",
  appId: "1:427655159075:web:f53bf6b459ac0c00c98096",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
