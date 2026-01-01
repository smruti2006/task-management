import axios from 'axios'

const token=localStorage.getItem('token')
const api = axios.create({
    baseURL:"https://task-management-1-s2ti.onrender.com/api",
    headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${token}`
    }
})
export default api