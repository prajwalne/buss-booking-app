import { Button } from "@mui/material";
import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  onValue,
  ref,
  child,
  push,
  update,
} from "firebase/database";

// import Header from ".components/Header.js";
const BussLayout = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyC1BGHWfTfY2PSHOX23lyHi9yJRNdIu1K0",
    authDomain: "buss-booking-react.firebaseapp.com",
    projectId: "buss-booking-react",
    storageBucket: "buss-booking-react.appspot.com",
    messagingSenderId: "22223359381",
    appId: "1:22223359381:web:e31f37398ac15441a97a9c",
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const location = useLocation();
  const { name, from, to, seats, id } = location.state;
  const [choosenSeats, setChoosenSeats] = useState([]);
  const [chairs, setChairs] = useState(seats);

  const handleClick = (id) => {
    choosenSeats.push(id);
    console.log(choosenSeats);
  };
  const bookSeats = () => {
    choosenSeats.forEach((value, id) => {
      chairs[value] = true;
    });
    setChairs([...chairs]);
    const updates = {};
    updates["/busses/" + id + "/seats"] = chairs;

    update(ref(db), updates);
    console.log(".....done");
  };

  return (
    <div>
      <h2>Choose Seats</h2>
      <div>
        {chairs.map((value, id) => {
          return value ? (
            <Button
              key={id}
              style={{
                backgroundColor: "#ff0000",
                margin: "5px",
                color: "#000000",
              }}
            >
              Seat Booked: {id}
            </Button>
          ) : (
            <Button
              style={{
                backgroundColor: "#00ff33",
                margin: "5px",
                color: "#000000",
              }}
              key={id}
              onClick={() => handleClick(id)}
            >
              Seat Available: {id}
            </Button>
          );
        })}
      </div>
      <Button
        style={{
          backgroundColor: "#0080ff",
          margin: "5px",
          color: "#000000",
        }}
        onClick={() => {
          bookSeats();
        }}
      >
        Book
      </Button>
    </div>
  );
};

export default BussLayout;
