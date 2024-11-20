import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBm-691o3ric38i6AROIUpWSXj-aUL7bhE",
    authDomain: "first-project-b41d8.firebaseapp.com",
    projectId: "first-project-b41d8",
    storageBucket: "first-project-b41d8.appspot.com",
    messagingSenderId: "75549635963",
    appId: "1:75549635963:web:379f903e3ca394f3ed79de",
    databaseURL: "https://first-project-b41d8-default-rtdb.firebaseio.com",
  };

export const app = initializeApp(firebaseConfig);