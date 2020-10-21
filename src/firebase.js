import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARz4PhZ_mLi8ubcxZHmgCCVRiekCYB2-E",
  authDomain: "e-clone-273d8.firebaseapp.com",
  databaseURL: "https://e-clone-273d8.firebaseio.com",
  projectId: "e-clone-273d8",
  storageBucket: "e-clone-273d8.appspot.com",
  messagingSenderId: "537776890138",
  appId: "1:537776890138:web:034230a88795cbd996cca3"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db =firebaseApp.firestore()
const auth=firebase.auth()

export {db,auth}