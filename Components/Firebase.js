// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOt98V153luJq8i6vGeHA_MWY5gioyC5Y",
  authDomain: "nextjs-icd.firebaseapp.com",
  databaseURL: "https://nextjs-icd-default-rtdb.firebaseio.com",
  projectId: "nextjs-icd",
  storageBucket: "nextjs-icd.appspot.com",
  messagingSenderId: "32404089489",
  appId: "1:32404089489:web:c782d30c7270109a3d6d30",
};

// Initialize Firebase
const firebase =   initializeApp(firebaseConfig);
const db =  firebase(getDatabase);

export { firebase, db };
