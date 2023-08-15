import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../action/auth";
const AddUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("in hadle ss");
    dispatch(registerInitiate(email, password, name));
  };

  return (
    <div>
      <form autoComplete="off">
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <div>
          <label>Re-Enter Password</label>
          <input type="text" />
        </div> */}

        <div>
          <button onClick={() => handleSubmit()}>Create Account</button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
