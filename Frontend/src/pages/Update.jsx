import React, { useState } from "react";
import api from "../api/api.js"
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    status: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleClick = async(e) => {
    e.preventDefault()
    if(!data.title || !data.status){
        alert("Enter all the field")
    }
    const res = await api.put(`/updatetask/${id}`,data)
    console.log(res.data.task)
    navigate("/task")

  }
  return (
    <>
      <form>
        <input placeholder="Enter your task name" name="title" onChange={handleChange} value={data.title}></input>
        <select
          type="status"
          name="status"
          onChange={handleChange}
          value={data.status}
        >
          <option value="">select</option>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="completed">completed</option>
        </select>
        <button onClick={handleClick}>Update</button>
      </form>
    </>
  );
};

export default Update;
