import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../api/api.js"


const Signup = () => {
  const navigate = useNavigate()
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    const{name,value}=e.target
    setFormdata({
      ...formdata,
      [name]:value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!formdata.name || !formdata.email || !formdata.password){
      alert("Fill the value")
    }
    try {
      const res= await api.post("/auth/signup",formdata)
      console.log(res.data.user)
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Enter Your name'onChange={handleChange}></input>
        <input name='email' type='email' placeholder='Enter Your Email' onChange={handleChange}></input>
        <input name='password' placeholder='Enter Your Password' onChange={handleChange}></input>
        <button type='submit'>Signup</button>
      </form>
      <button onClick={()=>{navigate("/login")}}>Already Signup</button>
    </>
  )
}

export default Signup
