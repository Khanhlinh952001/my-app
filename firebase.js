// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB76Ub46X7vvhLtm-wlJJKCcUJLayQpGsE",
  authDomain: "upload-9ece2.firebaseapp.com",
  databaseURL: "https://upload-9ece2-default-rtdb.firebaseio.com",
  projectId: "upload-9ece2",
  storageBucket: "upload-9ece2.appspot.com",
  messagingSenderId: "325278410225",
  appId: "1:325278410225:web:0c46096221261a144f1050",
  measurementId: "G-3K35F9BDQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
