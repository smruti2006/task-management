import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/connectDB.js'
import Signup from './src/routes/Signuproute.js'
import Login from './src/routes/Loginroute.js'
import taskroute from "./src/routes/Taskroute.js"
dotenv.config()
const app = express()
//Middleware
app.use(express.json())
app.use(cors())

const port = process.env.PORT
//DB connection
connectDB()
//Route
app.use("/api",Signup)
app.use("/api",Login)
app.use("/api",taskroute)
app.listen(port,()=>{
    console.log(`App is listening at ${port}`)
})
