// import Header from ".components/Header.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, { Component } from "react";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form autoComplete="off">
        <div>
          <label>Email</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register("price")} />
        </div>

        <div>
          <button>Login</button>
        </div>
        <div>
          <li className="nav-item">
            <Link className="nav-link" to="/addUser">
              not registered ? create new account
            </Link>
          </li>
        </div>
      </form>
    </div>
  );
};

export default Login;
