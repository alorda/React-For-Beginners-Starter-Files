import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAlf2FStqPJR2SMq59zxIYgpN9EUk0WnI",
  authDomain: "cotd-aux.firebaseapp.com",
  databaseURL: "https://cotd-aux.firebaseio.com",
  projectId: "cotd-aux"
  // storageBucket: "cotd-aux.appspot.com",
  // messagingSenderId: "439542966350",
  // appId: "1:439542966350:web:0c85dad812773ab6e03b1f",
  // measurementId: "G-KZJZKS6BVB"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
