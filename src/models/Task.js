import mongoose from 'mongoose'
const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        status:{
            type:String,
            enum:["pending","in-progress","completed"],
            require:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            require:true
        }
    },{timestamps:true}
)
const task = mongoose.model("Task",taskSchema)
export default task