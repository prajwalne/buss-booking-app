import Header from "./Header";
import "./style.css";
import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref as sRef, set, onValue } from "firebase/database";
// import database from "./firebaseConfig";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import db from "./firebaseConfig";
const Search = () => {
  const nav = useNavigate();
  const [bussList, setBussList] = useState([]);
  const [allShown, setAllShown] = useState();
  const [startCity, setStartCity] = useState();
  const [endCity, setEndCity] = useState();
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

  const showAllBuss = () => {
    onValue(sRef(db, "busses/"), (snapshot) => {
      const data = snapshot.val();
      setBussList(data);
      setAllShown(true);
    });
  };

  const HideAllBuss = () => {
    setBussList([]);
    setAllShown(false);
  };
  const searchBuss = () => {
    onValue(sRef(db, "busses/"), (snapshot) => {
      const data = snapshot.val();
      const array = data.filter((value) => {
        return (
          value.from.toUpperCase() === startCity.toUpperCase() &&
          value.to.toUpperCase() == endCity.toUpperCase()
        );
        // value.to === endCity
      });
      console.log(array);
      setBussList(array);
    });
  };

  const handleBooking = (value) => {
    nav("/busslayout", { state: value });
  };
  // //

  return (
    <div className="App">
      <div className="container">
        <input
          placeholder="from"
          onChange={(e) => {
            setStartCity(e.target.value);
          }}
        />
        <input
          placeholder="destination"
          onChange={(e) => {
            setEndCity(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            searchBuss(startCity, endCity);
          }}
        >
          Search Busses
        </button>
        {allShown ? (
          <button onClick={() => HideAllBuss()}>Hide All Busses</button>
        ) : (
          <button onClick={() => showAllBuss()}>Show All Busses</button>
        )}
      </div>

      {bussList.map((value, id) => {
        return (
          <div
            key={id}
            className="row-container"
            style={{ backgroundColor: "#00bbff" }}
          >
            <h2>{value.name}</h2>
            <label>
              {value.from} to {value.to}
            </label>
            <label>
              Boarding Time {value.startTime} Dropping Time {value.endTime}
            </label>
            {/* <Link
              style={{ textDecoration: "none", color: "white" }}
              to={{ pathname: "/busslayout", state: value }}
              value
            >
              Book
            </Link> */}
            <button
              onClick={() => {
                handleBooking(value);
              }}
            >
              Book
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
