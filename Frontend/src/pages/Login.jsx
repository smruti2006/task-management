import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      alert("Fill the value");
    }
    try {
      const res = await api.post("/auth/login", formdata);
      localStorage.setItem("token",res.data.token)
      navigate("/task")
    } catch (error) {
      console.log(error.message)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          type="gmail"
        ></input>
        <input
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Login</button>
      </form>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Not Register?
      </button>
    </>
  );
};

export default Login;
