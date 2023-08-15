// import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import BussLayout from "./BussLayout";
// import Header from ".components/Header.js";
const Welcome = () => {
  return (
    <Router>
      <div className="row">
        <div className="col-2">
          <Header />
        </div>

        <div className="col-10">
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/busslayout" element={<BussLayout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Welcome;
