import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3h2RlDmmMsghdg0_P9KcEsn9fBrnsUec",
  authDomain: "e-commerce-8317b.firebaseapp.com",
  projectId: "e-commerce-8317b",
  storageBucket: "e-commerce-8317b.firebasestorage.app",
  messagingSenderId: "235580324066",
  appId: "1:235580324066:web:6a7905b5e1dd1f7c9d86bb",
  measurementId: "G-Y94FEZJN34",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
