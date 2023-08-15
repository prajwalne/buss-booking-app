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
export default { auth, db };

//  function writeUserData() {
//    const db = database;
//    const dummyArray = [
//      {
//        name: "Verma Travels",
//        from: "Indore",
//        to: "Bhopal",
//        startTime: "09:10 AM",
//        endTime: "12:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Verma Travels",
//        from: "Delhi",
//        to: "Bhopal",
//        startTime: "08:00 AM",
//        endTime: "7:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Kalyani Travels",
//        from: "Indore",
//        to: "Pune",
//        startTime: "1:10 PM",
//        endTime: "2:00 AM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Charted Buss",
//        from: "Pune",
//        to: "Bhopal",
//        startTime: "09:10 AM",
//        endTime: "12:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Charted Buss",
//        from: "Indore",
//        to: "Bhopal",
//        startTime: "09:10 AM",
//        endTime: "12:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Kalyani Travels",
//        from: "Indore",
//        to: "Bhopal",
//        startTime: "10:10 AM",
//        endTime: "01:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Verma Travels",
//        from: "Indore",
//        to: "Pune",
//        startTime: "09:10 AM",
//        endTime: "08:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Saini Travels",
//        from: "Indore",
//        to: "Pune",
//        startTime: "09:10 AM",
//        endTime: "06:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Kalyani Travels",
//        from: "Pune",
//        to: "Bhopal",
//        startTime: "07:10 AM",
//        endTime: "02:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Kalyani Travels",
//        from: "Indore",
//        to: "Bhopal",
//        startTime: "09:10 AM",
//        endTime: "12:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Verma Travels",
//        from: "Bhopal",
//        to: "Indore",
//        startTime: "09:10 AM",
//        endTime: "12:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//      {
//        name: "Charted Buss",
//        from: "Indore",
//        to: "Bhopal",
//        startTime: "10:10 AM",
//        endTime: "02:00 PM",
//        seats: [
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//          false,
//        ],
//      },
//    ];
//    dummyArray.forEach((value, id) => {
//      set(ref(db, "busses/" + id), {
//        name: value.name,
//        from: value.from,
//        to: value.to,
//        startTime: value.startTime,
//        endTime: value.endTime,
//        seats: value.seats,
//      });
//    });
//  }
