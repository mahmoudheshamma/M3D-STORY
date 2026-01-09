import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwYs3xZW84Yy0Z2_DXk8FLUBJtShDQUoA",
  authDomain: "story-1cfce.firebaseapp.com",
  databaseURL: "https://story-1cfce-default-rtdb.firebaseio.com",
  projectId: "story-1cfce",
  storageBucket: "story-1cfce.firebasestorage.app",
  messagingSenderId: "982243872156",
  appId: "1:982243872156:web:663df4a6a38a663e998c59",
  measurementId: "G-67R3VHBV42"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة الخدمات
export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
