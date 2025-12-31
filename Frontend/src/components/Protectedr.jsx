import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const protectedr = () => {
  const token = localStorage.getItem("token")
  if(!token){
    Navigate("/login")
  }
  <Outlet/>

}

export default protectedr
