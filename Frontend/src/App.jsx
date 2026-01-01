import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Task from './pages/Task.jsx'
import Protected from "./components/Protectedr.jsx"
import TaskCreated from './pages/TaskCreated.jsx'
import Update from './pages/Update.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route element={<Protected />}>
        <Route path='/task' element={<Task/>}/>
        <Route path='/taskcreate' element = {<TaskCreated/>}/>
        <Route path='/taskupdate/:id' element = {<Update/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
