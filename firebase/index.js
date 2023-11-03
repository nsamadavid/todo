import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp_Dd7OfRbh1aBweJT_zQ7eAkE_GX27hw",
  authDomain: "chat-app-ba1d5.firebaseapp.com",
  projectId: "chat-app-ba1d5",
  storageBucket: "chat-app-ba1d5.appspot.com",
  messagingSenderId: "783787790147",
  appId: "1:783787790147:web:ff9d6dcedafabe1ec729f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
