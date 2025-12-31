import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/connectDB.js'
import Signup from './src/routes/Signuproute.js'
import Login from './src/controllers/Login.js'

const app = express()
//Middleware
app.use(express.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT
//DB connection
connectDB()
//Route
app.use("/api",Signup)
app.use("/api",Login)
app.listen(port,()=>{
    console.log(`App is listening at ${port}`)
})
