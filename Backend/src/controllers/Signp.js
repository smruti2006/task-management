import User from "../models/User.js"
import bcrypt from "bcrypt"

const signup= async(req,res)=>{
    try {
        const{name,email,password}=req.body
        if(!name || !email ||!password){
            return res.status(400).json({message:"fill all the field"})
        }
        const hashpassword= await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password:hashpassword
        })
        return res.status(201).json({
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                password:user.password
            }
        })
    } catch (error) {
        return res.status(500).json({message:"Server Error",Error:error.message})
    }
}
export default signup