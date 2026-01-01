import React from "react";
import api from "../api/api.js";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Task =  () => {
  const[tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const handleDelete = async(id)=>{
    const res = await api.delete(`/deletetask/${id}`)
    console.log(res.message)
    setTasks(tasks.filter(task => task._id !== id));
  }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/gettask");
        setTasks(res.data.task);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTasks();
  }, []);
  return (
    <>
      <button onClick={()=>{navigate("/taskcreate")}}>Create</button>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <h2>{task.status}</h2>
          <button onClick={()=>{navigate(`/taskupdate/${task._id}`)}}>Update</button>
          <button onClick={()=>{handleDelete(task._id)}}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Task;
