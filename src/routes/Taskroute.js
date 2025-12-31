import {Router} from "express"
import {createTask,getTask,getSingletask,updateTask,deleteTask} from "../controllers/Task.js"
import authMiddleware from "../middlewares/authMiddleware.js"
const router = Router()
router.post("/createtask",authMiddleware,createTask)
router.get("/gettask",authMiddleware,getTask)
router.get("/getsingletask/:id",authMiddleware,getSingletask)
router.put("/updatetask/:id",authMiddleware,updateTask)
router.delete("/deletetask/:id",authMiddleware,deleteTask)
export default router