

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMC0ckwcjAegoLb8PwqDYmtH0KVK9dAiY",
  authDomain: "cats-ef561.firebaseapp.com",
  projectId: "cats-ef561",
  storageBucket: "cats-ef561.appspot.com",
  messagingSenderId: "1029282213070",
  appId: "1:1029282213070:web:a9732b58ee280bb5ea749f",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);



