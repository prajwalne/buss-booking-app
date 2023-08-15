// import auth from "../components/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import firebase froms "firebase";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1BGHWfTfY2PSHOX23lyHi9yJRNdIu1K0",
  authDomain: "buss-booking-react.firebaseapp.com",
  projectId: "buss-booking-react",
  storageBucket: "buss-booking-react.appspot.com",
  messagingSenderId: "22223359381",
  appId: "1:22223359381:web:e31f37398ac15441a97a9c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const registerStart = () => ({
  type: "REGISTER_START",
});
const registerSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});
const registerFail = (error) => ({
  type: "REGISTER_FAIL",
  payload: error,
});

export const registerInitiate = (email, pass, displayName) => {
  return function(dispatch) {
    dispatch(registerStart());

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        console.log(">>>>>>>>>>>>" + user);
        dispatch(registerSuccess(user));
        // set(ref(db, "user/" + userCredential.uid), {
        //   name: value.name,
        //   from: value.from,
        //   to: value.to,
        //   startTime: value.startTime,
        //   endTime: value.endTime,
        //   seats: value.seats,
        // });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(registerFail(errorMessage));
        // ..
      });
  };
};
