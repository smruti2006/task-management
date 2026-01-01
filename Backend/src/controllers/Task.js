import Task from "../models/Task.js"
const createTask = async (req, res) => {
    const { title, status } = req.body
    if (!title || !status) {
        return res.status(401).json({ message: "Fill all the required field" })
    }
    try {
        const task = await Task.create({
            title, status,
            user: req.user.id
        })
        return res.status(201).json({ message: "Task is created", task })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getTask = async (req, res) => {
    try {
        const id = req.user.id
        const task = await Task.find({ user: id })
        return res.status(201).json({ message: "All task", task })
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

}
const getSingletask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        return res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateTask = async (req, res) => {
    try {
        const { title, status } = req.body
        const updatedtask = await Task.findByIdAndUpdate(req.params.id,
            { title: title, status: status },
            { new: true })
        return res.status(200).json({ message: "Updated successfully", updatedtask })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteTask = async (req, res) => {
    try {
        const deletetask = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted Successfully", deleteTask })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export { createTask, getTask, getSingletask, updateTask,deleteTask }