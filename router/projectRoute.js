const express = require('express')
const { isAuthMiddleware } = require('../auth/authentication')
const { addProject, getAllProjects, deleteProject, getSingleProject, updateProject } = require('../controller/projectController')

const router = express.Router()


router.post("/add", isAuthMiddleware, addProject)
router.put("/update/:id", isAuthMiddleware, updateProject);
router.get("/getAll", getAllProjects)
router.get("/getProject/:id", getSingleProject)
router.delete('/delete/:id', isAuthMiddleware, deleteProject)


module.exports = router