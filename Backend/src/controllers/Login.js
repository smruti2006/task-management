import User from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const Login = async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"User Does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({message:"Invalid Password"})
        }
        const token = jwt.sign({id:user._id,email:user.email},
            process.env.JWT_SECRETKEY,
            {expiresIn:"1d"})
        return res.status(200).json({message:"Login successfully",token})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export default Login;