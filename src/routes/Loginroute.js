import { Router } from "express"
import Login from "../controllers/Login.js"
const router=Router()
router.post('/auth/login',Login)
export default router